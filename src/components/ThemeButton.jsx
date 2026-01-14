import { useTheme } from '@/components/ThemeProvider';

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="p-2 rounded-md bg-primary">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}