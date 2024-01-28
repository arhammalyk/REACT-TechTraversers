import React from "react";
import tech from "../images/tech.png";

const Navbar = () => {
  return (
    <>
    <div className="tw-flex tw-justify-center">
      <nav className="tw-mx-1 fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        {/* <a className="navbar-brand tw-ml-16" href="/">Tech Traversers</a> */}
          <a className="navbar-brand tw-w-52 tw-ml-10" href="/">
            <img className="" src={tech} alt="" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 md:tw-space-x-10">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle tw-text-black hover:tw-text-[#02d463]"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link tw-text-black hover:tw-text-[#02d463]" aria-current="page" href="/">
                  Why Choose Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link tw-text-black hover:tw-text-[#02d463]" aria-current="page" href="/">
                  Work We Did
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle tw-text-black hover:tw-text-[#02d463]"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item md:tw-ml-20">
                <a className="nav-link tw-text-black md:tw-ml-10 hover:tw-text-[#02d463]" aria-current="page" href="/">
                  Contact Us Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
