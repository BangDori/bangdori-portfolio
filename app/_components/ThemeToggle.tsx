'use client';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="bg-background text-foreground hover:bg-muted absolute top-4 right-4 cursor-pointer rounded-md p-4 transition"
      aria-label="다크모드 토글"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
