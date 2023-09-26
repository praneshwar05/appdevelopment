import { configureStore } from '@reduxjs/toolkit';
import adventureSlice from './slice/adventureSlice';
import userReducer from './slice/userSlice';
import reservationSlice from './slice/reservationSlice';

const store = configureStore({
  reducer: {
    adventures: adventureSlice,
    user: userReducer,
    reservations: reservationSlice,
  },
});

export default store;
