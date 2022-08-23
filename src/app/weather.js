import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_baseUrl;
const apiKey = process.env.REACT_APP_apiKey;

const initialState = {
  pending: false,
  location: null,
};

export const getLocation = createAsyncThunk('/weather/location', async (location) => {
  const resp = await fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=3`);

  const data = await resp.json();
  return data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (state) => {
      state.pending = true;
    });

    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.pending = false;
      state.location = action.payload;
    });
  },
});

export default weatherSlice.reducer;
