import { createSlice } from '@reduxjs/toolkit';
import addNewReservation, {
  deleteReservation,
  fetchUserReservations,
} from './reservationAction';

const initialState = {
  reservations: [],
};
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewReservation.fulfilled, (state, action) => {
      state.reservations = [...action.payload];
    });

    builder.addCase(fetchUserReservations.fulfilled, (state, action) => {
      state.reservations = [...action.payload];
    });

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.reservations = [...action.payload];
    });
  },
});

export default reservationSlice.reducer;
