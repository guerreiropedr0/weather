import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = process.env.REACT_APP_baseUrl;
const apiKey = process.env.REACT_APP_apiKey;

const initialState = {
  pending: false,
  location: {},
  unit: {
    isAmerican: false,
    speed: 'kph',
    measure: 'mm',
    scale: 'C',
  },
};

export const getLocation = createAsyncThunk('/weather/location', async (location) => {
  const resp = await fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=3`);

  const data = await resp.json();
  return data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeUnit: (state) => {
      if (!state.unit.isAmerican) {
        state.unit.isAmerican = true;
        state.unit.speed = 'mph';
        state.unit.measure = 'in';
        state.unit.scale = 'F';
      } else {
        state.unit.isAmerican = false;
        state.unit.speed = 'kph';
        state.unit.measure = 'mm';
        state.unit.scale = 'C';
      }
    },
  },
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

export const { changeUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
