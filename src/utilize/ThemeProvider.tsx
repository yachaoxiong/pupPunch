import React, {createContext, ReactNode, useContext} from 'react';
import {useSelector} from 'react-redux';
import {
  ThemeState,
  sunnyDay,
  midnightBlue,
  forestGreen,
  coolBreeze,
} from '@/styles/themes';
import {ThemeType} from '@/store/slices/themeSlice';
import {RootState} from '@/store/store';

const themeMap: Record<ThemeType, ThemeState> = {
  sunnyDay,
  midnightBlue,
  forestGreen,
  coolBreeze,
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeState>(sunnyDay);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const themeType = useSelector((state: RootState) => state.theme.theme);
  const theme = themeMap[themeType];
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
