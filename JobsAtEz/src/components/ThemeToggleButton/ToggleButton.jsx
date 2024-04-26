import { useTheme } from "../ThemeProvider/ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <label className="switch">
      <img
        src={theme === 'light' ? "./images/sun.jpg" : "./images/moon.jpg"}
        alt={theme === 'light' ? "Sun" : "Moon"}
        style={{ height: "50px", width: "50px", cursor: "pointer" }}
        onClick={toggleTheme}
      />
      <div className="slider"></div>
    </label>
  )
}
