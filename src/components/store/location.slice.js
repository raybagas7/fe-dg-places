import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    chosenLocation: null,
    showInfoLocation: false,
    centerMap: { lat: 1.28692, lng: 103.85457 },
    zoomMap: 15,
    activeLocationId: null,
  },
  reducers: {
    changeLocation(state, action) {
      state.chosenLocation = action.payload;
    },
    toggleShowInfoLocation(state) {
      state.showInfoLocation = !state.showInfoLocation;
    },
    showInfoLocation(state, action) {
      state.showInfoLocation = true;
      state.zoomMap = 17;
      state.centerMap = action.payload;
      state.activeLocationId = action.payload.id;
    },
    hideInfoLocation(state) {
      state.showInfoLocation = false;
      state.zoomMap = 15;
      state.activeLocationId = null;
    },
    changeMapCenter(state, action) {
      state.centerMap = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;

export default locationSlice;
