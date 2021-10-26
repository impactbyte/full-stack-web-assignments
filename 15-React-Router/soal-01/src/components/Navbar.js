import { Link, useLocation } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Skilvul
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routes
              .filter((r) => r?.isHidden === undefined)
              .map((r, id) => (
                <li key={id} className="nav-item">
                  <Link
                    className={`nav-link text-capitalize ${
                      location.pathname === r.path ? "active" : ""
                    }`}
                    to={r.path}
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
