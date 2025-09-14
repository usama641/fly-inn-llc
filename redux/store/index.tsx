// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices';

export const store = configureStore({
  reducer: rootReducer,
});

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;