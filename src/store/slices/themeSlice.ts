// store/slices/themeSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ThemeType =
  | 'sunnyDay'
  | 'midnightBlue'
  | 'forestGreen'
  | 'coolBreeze';

interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: 'sunnyDay',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
