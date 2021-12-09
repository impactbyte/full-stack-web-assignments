const Navbar = ({ totalItem = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Home Town Cafe
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-primary position-relative"
            >
              cart
              {totalItem > 0 ? (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItem > 99 ? "99+" : totalItem}
                  <span className="visually-hidden">unread messages</span>
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
