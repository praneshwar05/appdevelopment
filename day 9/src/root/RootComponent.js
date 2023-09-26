import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import SignOutBtn from '../Components/SignOutBtn';
import { currentUserObj } from '../App';
import { authenticateUser } from '../redux/slice/userSlice';
import checkCurrentUser from '../redux/actions/userActions';

import { fetchUserReservations } from '../redux/slice/reservationAction';

const RootComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkCurrentUser()) {
      dispatch(authenticateUser(currentUserObj()));
      dispatch(fetchUserReservations());
    }
  }, [dispatch]);
  return (
    <>
      <NavBar />
      {user !== null && (
        <div className="position-absolute top-0 end-0 d-inline-block">
          <SignOutBtn />
        </div>
      )}

      <div className="container wrapper d-flex flex-column min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootComponent;
