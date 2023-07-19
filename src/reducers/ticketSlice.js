import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    numberOfTicket: 0,
    ticketPrice: 0,
    movieTitle: "",
    languageTitle: "",
    moviePoster: "",
    seats: []
  },
  reducers: {
    ticketIncrement(state) {
      state.numberOfTicket++;
    },
    increaseWithAmount(state, action) {
      state.ticketPrice = state.ticketPrice + action.payload;
    },
    movieName(state, action) {
      state.numberOfTicket = 0;
      state.ticketPrice = 0;
      state.seats = [];
      state.movieTitle = action.payload;
    },
    movieLanguage(state, action) {
      state.languageTitle = action.payload;
    },
    ticketNumber(state, action) {
      state.seats.push(action.payload);
    },
    posterImg(state, action) {
      state.moviePoster = action.payload;
    },
    clearTickets(state) {
      state.ticketPrice = 0;
      state.numberOfTicket = 0;
    }
  }
});

export const {
  ticketIncrement,
  increaseWithAmount,
  movieName,
  movieLanguage,
  ticketNumber,
  posterImg,
  clearTickets
} = ticketSlice.actions;
export default ticketSlice.reducer;
