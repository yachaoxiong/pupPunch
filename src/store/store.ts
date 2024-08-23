import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '@src/store/slices/themeSlice';
import languageReducer from '@src/store/slices/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
