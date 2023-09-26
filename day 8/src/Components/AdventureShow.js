import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnAdventure, deleteAdventure } from '../redux/slice/adventureSlice';
import addNewReservation, {
  fetchUserReservations,
  deleteReservation,
} from '../redux/slice/reservationAction';

import checkCurrentUser from '../redux/actions/userActions';

const checkReservation = (reservations, id) => {
  const idInt = +id;
  const index = reservations.findIndex(
    (reservation) => reservation.adventure_id === idInt,
  );
  if (index !== -1) {
    return true;
  }
  return false;
};
const AdventureShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentAdventure = useSelector(
    (store) => store.adventures.currentAdventure,
  );

  const { deletionSuccess } = useSelector((state) => state.adventures);
  const user = useSelector((state) => state.user.user);

  // Add code to fetch adventure details using the adventure ID
  const [formattedDate] = useState(new Date());
  const [adventureName, setAdventureName] = useState('');
  const [adventurePicture, setAdventurePicture] = useState('');
  const [adventureDescription, setAdventureDescription] = useState('');
  const options = useState({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  if (!checkCurrentUser()) {
    navigate('/login');
  }

  useEffect(() => {
    dispatch(getAnAdventure(id));
  }, [dispatch, id]);

  // Use another useEffect to observe changes in currentAdventure
  useEffect(() => {
    if (currentAdventure) {
      setAdventureName(currentAdventure.name);
      setAdventurePicture(currentAdventure.picture);
      setAdventureDescription(currentAdventure.description);
    }
  }, [currentAdventure]);

  const reservations = useSelector((state) => state.reservations.reservations);
  const [isReserved, setIsReserved] = useState(
    checkReservation(reservations, id),
  );
  const reserveHandler = () => {
    dispatch(addNewReservation(id));
    setIsReserved(true);
  };
  const deleteReserveHandler = () => {
    const idInt = +id;
    const reservationIndex = reservations.findIndex(
      (reservation) => reservation.adventure_id === idInt,
    );

    const reservationId = reservations[reservationIndex].id;
    dispatch(deleteReservation(reservationId));
    setIsReserved(false);
  };

  // deleting adventure
  useEffect(() => {
    dispatch(fetchUserReservations());
  }, [dispatch]);

  // redirect to adventure list on successfull deletion
  useEffect(() => {
    if (deletionSuccess) {
      navigate('/');
    }
  }, [deletionSuccess, navigate]);

  const handleDelete = () => {
    dispatch(deleteAdventure(id));
  };

  return (
    <>
      <h1 className="text-center mb-5">{adventureName}</h1>
      <div className="card mb-3" style={{ height: '60vh' }}>
        <div className="row g-0">
          <div className="col-md-8">
            {/* Image container with fixed height and object-fit */}
            <div
              className="img-container"
              style={{
                height: '100%',
                overflow: 'hidden', // Hide any overflow
              }}
            >
              <img
                src={`/display-${adventurePicture}`}
                className="img-fluid rounded-start"
                alt={`${adventureName}`}
                style={{
                  width: '100%',
                  height: '60vh', // Set image height to 100% of the parent container
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <div className="card-body">
              <h5 className="card-title">{adventureName}</h5>
              <p className="card-text">{adventureDescription}</p>
              <p className="card-text">
                <small className="text-body-secondary mt-auto">
                  Created on
                  {' '}
                  {formattedDate.toLocaleDateString('en-US', options)}
                </small>
              </p>
            </div>
            {user !== null && (
              <div className="row">
                <div className="col">
                  <div className="mt-auto m-2 d-flex justify-content-between ">
                    {isReserved ? (
                      <button
                        className="btn btn-warning"
                        type="button"
                        onClick={deleteReserveHandler}
                      >
                        Unsave Adventure
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={reserveHandler}
                      >
                        Save this Adventure
                      </button>
                    )}
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={handleDelete}
                    >
                      Delete Adventure
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureShow;
