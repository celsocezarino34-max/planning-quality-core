import { NavLink } from "react-router-dom";
import {
  BarChart3,
  CloudUpload,
  Gauge,
  Settings,
  ShieldCheck,
} from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { to: "/curve-s", label: "Curva S", icon: Gauge },
  { to: "/imports", label: "Importações", icon: CloudUpload },
  { to: "/rules", label: "Regras & Qualidade", icon: ShieldCheck },
  { to: "/settings", label: "Configurações", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">P</div>
        <div className="brand-text">
          <div className="brand-title">PlanIQ</div>
          <div className="brand-subtitle">Planning Quality & Intelligence</div>
        </div>
      </div>

      <nav className="nav">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="tiny-muted">v0.1 • base UI</div>
      </div>
    </aside>
  );
}
