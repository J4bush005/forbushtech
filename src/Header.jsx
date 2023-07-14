import React from "react";
import Logo from "./Logo.svg";
import Color from "./components/images/Color logo - no background.png";
import "./index.css";

function Header() {
  return (
    <nav id="header" class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
         <img id="logo-image" src={Color} alt="" />
        </a>
        <button
        
          class="navbar-toggler custom-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span id="bigger" class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Forbush Technologies
            </h5>
            <button
            id="close"
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div  class="offcanvas-body">
            <ul  class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a id="body-text" class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  id="body-text"
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul id="background" class="dropdown-menu">
                  <li>
                    <a id="body-text" class="dropdown-item" href="#">
                      Web Pages
                    </a>
                  </li>
                  <li>
                    <a id="body-text" class="dropdown-item" href="#">
                      Games
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a id="body-text" class="dropdown-item" href="#">
                      Misc.
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
