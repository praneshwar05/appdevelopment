import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setUserInLocalStorage = (user) => {
  localStorage.setItem('id', JSON.stringify(user));
};

// Initial state for the userSlice
const initialState = {
  user: null, // User information
  error: null, // General error
  message: '', // General message
  isAuthenticated: false, // Authentication status
  isSignupLoading: false, // Loading state for signup
  isSignupSuccess: false, // Signup success status
  isSignupError: false, // Signup error status
  isLoginLoading: false, // Loading state for login
  isLoginSuccess: false, // Login success status
  isLoginError: false, // Login error status
};

// Async action to log in a user
export const login = createAsyncThunk('user/login', async (username) => {
  try {
    const response = await axios.post(
      'https://outdoor-adventures.onrender.com/api/v1/login',
      {
        username,
      },
    );
    setUserInLocalStorage(response.data);
    return response.data; // Successful response data
  } catch (error) {
    throw error.message; // Throwing error message on failure
  }
});

// Async action to sign up a user
export const signup = createAsyncThunk('user/signup', async (username) => {
  try {
    const response = await axios.post(
      'https://outdoor-adventures.onrender.com/api/v1/signup',
      {
        username,
      },
    );
    const user = response.data;
    setUserInLocalStorage(user.user);
    return response.data; // Successful response data
  } catch (error) {
    throw new Error('Signup failed. Please check your username.'); // Throwing custom error message on failure
  }
});

// Redux slice to manage user-related state
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer to log out a user
    logout: (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    }),
    authenticateUser: (state, action) => ({
      ...state,
      user: action.payload,
      isAuthenticated: true,
      isLoginError: false,
    }),
  },
  extraReducers: (builder) => {
    // Reducer cases for the 'login' action
    builder.addCase(login.pending, (state) => {
      // Set loading flags for login
      state.isLoginLoading = true;
      state.isLoginSuccess = false;
      state.isLoginError = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // Update state on successful login
      state.isAuthenticated = true;
      state.isLoginLoading = false;
      state.isLoginSuccess = true;
      state.isLoginError = false;
      state.user = action.payload;
      state.message = action.payload.message;
      state.error = null;
    });
    builder.addCase(login.rejected, (state) => {
      // Update state on login failure
      state.isAuthenticated = false;
      state.isLoginSuccess = false;
      state.isLoginLoading = false;
      state.isLoginError = true;
      state.error = 'Login failed. Please check your username.';
    });

    // Reducer cases for the 'signup' action
    builder.addCase(signup.pending, (state) => {
      // Set loading flags for signup
      state.isSignupLoading = true;
      state.isSignupSuccess = false;
      state.isSignupError = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      // Update state on successful signup
      state.isAuthenticated = true;
      state.isSignupLoading = false;
      state.isSignupSuccess = true;
      state.isSignupError = false;
      state.user = action.payload;
      state.message = action.payload;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state) => {
      // Update state on signup failure
      state.isSignupSuccess = false;
      state.isSignupLoading = false;
      state.isSignupError = true;
      state.error = 'Signup failed. Please check your username.';
    });
  },
});

// Export the 'logout' action from the slice
export const { logout, authenticateUser } = userSlice.actions;

// Export the userSlice reducer
export default userSlice.reducer;
