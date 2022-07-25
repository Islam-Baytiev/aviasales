import { configureStore } from '@reduxjs/toolkit';

import ticketData from './slices/ticketData';
import filtersData from './slices/filtersData';

export const store = configureStore({
  reducer: {
    ticketData,
    filtersData,
  },
});
