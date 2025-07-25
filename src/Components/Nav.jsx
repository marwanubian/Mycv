import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
  const { pathname } = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <NavLink className="navbar-brand fw-bold" to="/">
            <span className="text-primary">DEV</span>PORTFOLIO
          </NavLink>
        </motion.div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", name: "Home" },
              { path: "/about", name: "About" },
              { path: "/portfolio", name: "Portfolio" },
              { path: "/contact", name: "Contact" },
            ].map((item) => (
              <li className="nav-item position-relative" key={item.path}>
                <NavLink 
                  className="nav-link px-3" 
                  to={item.path}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}