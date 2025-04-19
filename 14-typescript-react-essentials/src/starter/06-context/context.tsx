import { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ComponentProps = {
  theme?: Theme;
} & React.PropsWithChildren;

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  theme: initialTheme = 'system',
}: ComponentProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within the ThemeProvider');
  }
  return context;
};
