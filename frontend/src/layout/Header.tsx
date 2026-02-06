import { useTheme } from "../theme/useTheme";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        height: 60,
        background: theme === "light" ? "#f1f5f9" : "#0f172a",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <strong>Planning Quality Core</strong>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
      </button>
    </header>
  );
}
