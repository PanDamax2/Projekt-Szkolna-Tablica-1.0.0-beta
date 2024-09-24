import { createContext, useContext, ReactNode } from 'react';
import useColorMode from '../hooks/useColorMode';
import { ColorMode, ColorModeContextType } from '../types/useDarkMode';

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export const ColorModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode() as [ColorMode, (mode: ColorMode) => void];

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorModeContext must be used within a ColorModeProvider');
  }
  return context;
};