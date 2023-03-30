import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './location.slice';

const store = configureStore({
  reducer: { location: locationSlice.reducer },
});

export default store;
