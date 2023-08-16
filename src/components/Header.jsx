import React from "react";
import F from "./images/F.png";
import "../index.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <nav id="header" class="navbar">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            <img id="logo" className="img-fluid" src={F} alt="" />
          </Link>
         {/*  <button
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
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item dropdown">
                  <Link
                    id="body-text"
                    class="nav-link dropdown-toggle"
                    to={"#"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </Link>
                  <ul id="background" class="dropdown-menu">
                    <li>
                      <Link id="body-text" class="dropdown-item" to={"#"}>
                        Web Pages
                      </Link>
                    </li>
                    <li>
                      <Link id="body-text" class="dropdown-item" to={"#"}>
                        Games
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link id="body-text" class="dropdown-item" to={"#"}>
                        Misc.
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul> 
            </div>
          </div>*/}
        </div>
      </nav>
    </div>
  );
}

export default Header;
