import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EVENT_API } from "../../helpers/consts";

export const addEventCard = createAsyncThunk(
  "event/addEventCard",
  async (event) => {
    const res = await axios.post(EVENT_API, event);
  }
);

export const getEventCard = createAsyncThunk("event/getEventCard", async () => {
  const data = await axios.get(EVENT_API);
  return data.data;
});
