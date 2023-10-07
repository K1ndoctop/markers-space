import { createSlice } from "@reduxjs/toolkit";
import { getEventCard } from "./eventAction";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    loading: false,
    events: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventCard.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
      console.log(state.events);
    });
  },
});

export default eventSlice.reducer;
