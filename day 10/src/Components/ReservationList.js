import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserReservations } from '../redux/slice/reservationAction';
import Adventure from './Adventure';
import checkCurrentUser from '../redux/actions/userActions';

const ReservationList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);
  const reservations = useSelector((state) => state.reservations.reservations);
  const adventures = useSelector((state) => state.adventures.adventures);
  const adventuresIds = reservations.map(
    (reservation) => reservation.adventure_id,
  );
  if (!checkCurrentUser()) {
    navigate('/login');
  }
  if (!adventures[0]) {
    return;
  }
  const filterAdventuresUsingID = (adventure) => adventuresIds.includes(adventure.id);
  const reservedAdvent = adventures[0].filter((adventure) => filterAdventuresUsingID(adventure));
  // eslint-disable-next-line
  return (
    <>
      <h1 className="text-center mb-5">My Reservations</h1>
      {reservations.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reservedAdvent.map((adventure) => (
            <Link
              to={`/adventures/${adventure.id}`}
              key={adventure.id}
              className="btn"
            >
              <Adventure
                name={adventure.name}
                key={adventure.id}
                picture={adventure.picture}
                description={adventure.description}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ReservationList;
