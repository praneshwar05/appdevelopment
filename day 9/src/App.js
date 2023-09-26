import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import AdventureList from './Components/AdventureList';

import { authenticateUser } from './redux/slice/userSlice';
import checkCurrentUser from './redux/actions/userActions';

export const currentUserObj = () => {
  if (localStorage.getItem('id') !== null) {
    const userObj = localStorage.getItem('id');

    return JSON.parse(userObj);
  }
  return false;
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkCurrentUser()) {
      dispatch(authenticateUser(currentUserObj()));
    }
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <AdventureList />
      </div>
    </>
  );
};

export default App;
