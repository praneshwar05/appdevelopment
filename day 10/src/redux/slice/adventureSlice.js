import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const adventuresInitialState = {
  adventures: [],
  currentAdventure: null,
  isReserved: false,
  creationSuccess: false,
  creationLoading: false,
  creationError: false,
  deletionSuccess: false,
  deletionLoading: false,
  deletionError: false,
  error: null,
};

export const createAdventure = createAsyncThunk(
  'adventure/create',
  async ({ formData }) => {
    const { name, selectedPicture, description } = formData;
    const response = await axios.post(
      'https://outdoor-adventures.onrender.com/api/v1/create_adventure',
      {
        // user_id: user.id,
        name,
        picture: selectedPicture,
        description,
      },
    );
    // Check if the response status is 201 (adventure created successfully.)
    if (response.status === 201) {
      return response.data;
    }
    if (response.status === 409) {
      // Throw a custom error with the desired message
      throw new Error();
    } else {
      throw new Error();
    }
  },
);

export const getAllAdventures = createAsyncThunk('adventures/get', async () => {
  const response = await axios.get(
    'https://outdoor-adventures.onrender.com/api/v1/adventures',
  );
  return response.data;
});

export const deleteAdventure = createAsyncThunk(
  'adventures/delete',
  async (id) => {
    const response = await axios.delete(
      `https://outdoor-adventures.onrender.com/api/v1/adventures/${id}`,
    );
    return response.data;
  },
);

export const getAnAdventure = createAsyncThunk('adventure/get', async (id) => {
  const response = await axios.get(
    `https://outdoor-adventures.onrender.com/api/v1/adventures/${id}`,
  );
  return response.data;
});

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState: adventuresInitialState,
  reducers: {
    setErrorMessage: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    resetCreationError: (state) => ({
      ...state,
      creationError: false,
      creationSuccess: false,
      deletionSuccess: false,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(createAdventure.pending, (state) => {
      // Set loading flags for login
      state.creationSuccess = false;
      state.creationLoading = true;
      state.creationError = false;
    });
    builder.addCase(createAdventure.fulfilled, (state) => {
      // Update state on successful login
      state.creationSuccess = true;
      state.creationLoading = false;
      state.creationError = false;
      state.error = null;
    });
    builder.addCase(createAdventure.rejected, (state, action) => {
      // Update state on login failure
      state.creationSuccess = false;
      state.creationLoading = true;
      state.creationError = true;
      if (action.error.message === 'Request failed with status code 409') {
        state.error = 'Adventure by this name already exists.';
      }
    });
    builder.addCase(deleteAdventure.pending, (state) => {
      // Set loading flags for login
      state.deletionSuccess = false;
      state.deletionLoading = true;
      state.deletionError = false;
    });
    builder.addCase(deleteAdventure.fulfilled, (state) => {
      // Update state on successful login
      state.deletionSuccess = true;
      state.deletionLoading = false;
      state.deletionError = false;
      state.error = null;
    });
    builder.addCase(deleteAdventure.rejected, (state) => {
      // Update state on login failure
      state.creationSuccess = false;
      state.creationLoading = true;
      state.deletionError = true;
    });
    builder.addCase(getAllAdventures.pending, () => {});
    builder.addCase(getAllAdventures.fulfilled, (state, action) => {
      state.adventures.push(action.payload);
    });
    builder.addCase(getAllAdventures.rejected, () => {});

    builder.addCase(getAnAdventure.fulfilled, (state, action) => {
      // Update state on successful fetch of an individual adventure
      state.currentAdventure = {
        ...action.payload,
        created_at: new Date(action.payload.created_at), // Convert to Date object
      };
      state.currentAdventure = action.payload;
    });
  },
});

export const { setErrorMessage, resetCreationError } = adventuresSlice.actions;
export default adventuresSlice.reducer;
