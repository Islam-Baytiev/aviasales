import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTicketStore = createAsyncThunk('ticket/fetchTicketStatus', async (params) => {
  const { data } = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${params}`);
  return data;
});

const initialState = {
  tickets: [],
  isLoading: false,
  isError: 0,
  isStop: false,
  count: 5,
  idx: '',
};

const ticketData = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = false;
    },
    setCount(state, action) {
      state.count = action.payload;
    },
    setIdx(state, action) {
      state.idx = action.payload;
    },
  },
  extraReducers: {
    [fetchTicketStore.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTicketStore.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.isStop = action.payload.stop;
    },
    [fetchTicketStore.rejected]: (state) => {
      state.isError += 1;
    },
  },
});

export const { setCount, setIsLoading, setIdx } = ticketData.actions;
export default ticketData.reducer;
