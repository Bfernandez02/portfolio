import { useTheme } from "@/components/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export function ThemeButton({textColor}) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={`text-[20px] text-${textColor ? textColor : 'secondary'}`}>
      <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
    </button>
  );
}
