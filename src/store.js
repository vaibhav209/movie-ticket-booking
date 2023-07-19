import { configureStore } from '@reduxjs/toolkit';
import ticketReducer from './reducers/ticketSlice';

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});
