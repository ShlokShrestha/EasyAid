import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fixed-top py-3 shadow-sm">
        <div class="container">
          <Link class="navbar-brand d-flex align-items-center" to="/">
            <img src="/img/easyaid.png" alt="logo" width={130} />
          </Link>
          <button
            class="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>

              <button
                type="button "
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-center fw-semibold">
                <li class="nav-item mx-2">
                  <Link class="nav-link " to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/about">
                    About us
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/causes">
                    Causes
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
