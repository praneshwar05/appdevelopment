import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../redux/slice/userSlice';
import checkCurrentUser from '../redux/actions/userActions';

function LoginForm() {
  // Extracting user-related state and functions from Redux

  const {
    user,
    error,
    isAuthenticated,
    isLoginSuccess,
    isLoginError,
    isLoginLoading,
  } = useSelector((store) => store.user);
  const myInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginMessage = useSelector((state) => state.user.message);

  useEffect(() => {
    if (checkCurrentUser()) {
      navigate('/');
    }
    // Redirect to the adventures page if successfully logged in and not facing login error
    if (isAuthenticated && !isLoginError) {
      navigate('/');
    }
  }, [dispatch, isAuthenticated, isLoginSuccess, user, isLoginError, navigate]);

  const handleLogin = (event) => {
    // Dispatch the login action with the entered username
    event.preventDefault();
    dispatch(login(myInputRef.current.value));
  };
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <form className="col-8" onSubmit={handleLogin}>
          <h1 className="mb-5">Login</h1>
          <div className="mb-3">
            <input
              type="text"
              className="col-8 form-control"
              placeholder="Enter username"
              ref={myInputRef}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoginLoading}
          >
            {isLoginLoading ? 'Logging in...' : 'Login'}
          </button>

          <p>{isLoginError && error}</p>
          <p>
            Don&apos;t have an account?
            <Link to="/signup">Sign up</Link>
            .
          </p>
        </form>
        {/* Display login message if login is successful */}
        <p>{isLoginSuccess && loginMessage}</p>

        {/* Display error message if login fails */}
      </div>
    </div>
  );
}

export default LoginForm;
