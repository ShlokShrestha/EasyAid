import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light fixed-top py-3">
        <div class="container">
          <a class="navbar-brand" href="#">
            Offcanvas navbar
          </a>
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
                  <a class="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">
                    Causes
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">
                    News
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
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
