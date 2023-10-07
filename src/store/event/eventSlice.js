import { createSlice } from "@reduxjs/toolkit";
import { getEventCard } from "./eventAction";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    loading: false,
    event: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventCard.fulfilled, (state, action) => {
      state.loading = false;
      state.event = action.payload;
    });
  },
});
