import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  resetCreationError,
  getAllAdventures,
} from '../redux/slice/adventureSlice';
import Adventure from './Adventure';
import checkCurrentUser from '../redux/actions/userActions';

const AdventureList = () => {
  const dispatch = useDispatch();
  const [adventures, setAdventures] = useState([]);
  const navigate = useNavigate();

  // get list of adventures from api
  useEffect(() => {
    fetch('https://outdoor-adventures.onrender.com/api/v1/adventures')
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setAdventures(data);
      })
      .catch((error) => error);
  }, []);
  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // reset adventure creation states on mount
  useEffect(() => {
    dispatch(resetCreationError());
    dispatch(getAllAdventures());
  }, [dispatch]);
  // Fetch adventure data from the server on component mount
  const user = localStorage.getItem('id');
  useEffect(() => {}, [dispatch, navigate, isAuthenticated, user]);

  // handle adding adventure categories
  function handleAddAdventureButtonClick() {
    navigate('/addAdventure');
  }

  return (
    <>
      <div className="text-center">
        <br />
        {checkCurrentUser() ? (
          <button
            className="btn btn-lg btn-primary"
            type="button"
            style={{
              backgroundColor: 'black',
              color: '#fff',
              fontWeight: '400',
              borderColor: '#97bf0f',
              fontSize: '1.9rem',
            }}
            onClick={handleAddAdventureButtonClick}
          >
            New Adventure!
          </button>
        ) : (
          <>
            <Link
              to="/signup"
              className="btn"
              style={{
                backgroundColor: 'blue',
                color: '#fff',
                fontWeight: '400',
                borderColor: 'blue',
                fontSize: '1.9rem',
              }}
            >
              Signup!
            </Link>
            <p className="mt-3">
              Already have an account?
              {' '}
              <Link to="/login">Login</Link>
              .
            </p>
          </>
        )}

        <p className="font-weight-bold fs-3 mt-1 ">
          Here, you get to design your own
          {' '}
          <span
            style={{
              color: '#d35504',
              fontSize: '2.25rem',
            }}
          >
            {' '}
            adventures!!
          </span>
        </p>
      </div>
      <h3 className="text-center-not mt-2">Latest Adventures</h3>
      {/* {adventures.length} */}
      {adventures.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {adventures.map((adventure) => (
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
                adventureId={adventure.id}
              />
            </Link>
          ))}
        </div>
      )}
      {/* Display a message if there are no adventures */}
      {adventures.length === 0 && (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <div className="col">
            <div className="card h-100">
              <img src="/sad.png" className="card-img-top" alt="Adventure" />
              <div className="card-body">
                <h5 className="card-title">No Adventures</h5>
                <p className="card-text">
                  You need to create some adventrues now!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdventureList;
