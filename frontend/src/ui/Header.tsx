import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/useTheme";

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <div className="page-title">PlanIQ</div>
        <div className="page-subtitle">Base UI • Sidebar + Tema</div>
      </div>

      <div className="header-right">
        <button className="btn" onClick={toggle} title="Alternar tema">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
        </button>
      </div>
    </header>
  );
}
