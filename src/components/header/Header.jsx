import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const HeaderComponent = () => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <>
      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open" onClick={() => setShowCanvas(!showCanvas)}>
        <i className="icon_menu"></i>
      </div>

      <Offcanvas show={showCanvas} onHide={() => setShowCanvas(!showCanvas)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Gilgal Towers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-menu-wrapper">
            <div
              className="search-icon search-switch"
              onClick={() => setShowModal(!showModal)}
            >
              <i className="icon_search"></i>
            </div>
            <div className="header-configure-area">
              <div className="language-option">
                <img src="/img/flag.jpg" alt="flag" />
                <span>
                  EN <i className="fa fa-angle-down"></i>
                </span>
                <div className="flag-dropdown">
                  <ul>
                    <li>
                      <a href="#">En</a>
                    </li>
                    <li>
                      <a href="#">Fr</a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="#" className="bk-btn">
                Booking Now
              </a>
            </div>
            <nav className="mainmenu mobile-menu">
              <ul>
                <li className={pathname === "/" && "active"}>
                  <a href="/">Home</a>
                </li>
                <li className={pathname === "/bookings" && "active"}>
                  <a href="/bookings">Bookings</a>
                </li>
                <li className={pathname === "/about-us" && "active"}>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li className={pathname === "/gallery" && "active"}>
                      <a href="/gallery">Gallery</a>
                    </li>
                  </ul>
                </li>
                <li className={pathname === "/events" && "active"}>
                  <a href="/events">Events</a>
                </li>
                <li className={pathname === "/contact-us" && "active"}>
                  <a href="/contact-us">Contact</a>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="top-social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-tripadvisor"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <ul className="top-widget">
              <li>
                <i className="fa fa-phone"></i> (12) 345 67890
              </li>
              <li>
                <i className="fa fa-envelope"></i> info.colorlib@gmail.com
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <!-- Offcanvas Menu Section End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li>
                    <i className="fa fa-phone"></i> +237 233 333 888
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> info@gilgaltowers.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <a href="/bookings" className="bk-btn">
                    Booking Now
                  </a>
                  <div className="language-option">
                    <img src="img/flag.jpg" alt="" />
                    <span>
                      EN <i className="fa fa-angle-down"></i>
                    </span>
                    <div className="flag-dropdown">
                      <ul>
                        <li>
                          <a href="#">En</a>
                        </li>
                        <li>
                          <a href="#">Fr</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/img/logo.png"
                      alt="logo"
                      style={{ width: 100, height: 60, margin: 0 }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className={pathname === "/" && "active"}>
                        <a href="/">Home</a>
                      </li>
                      <li className={pathname === "/bookings" && "active"}>
                        <a href="/bookings">Bookings</a>
                      </li>
                      <li className={pathname === "/about-us" && "active"}>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li className={pathname === "/gallery" && "active"}>
                            <a href="/gallery">Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li className={pathname === "/events" && "active"}>
                        <a href="/events">Events</a>
                      </li>
                      <li className={pathname === "/contact-us" && "active"}>
                        <a href="/contact-us">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    className="nav-right search-switch"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <i className="icon_search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --></> */}

      {/* Search model Begin */}
      {showModal && (
        <div className="search-model">
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div
              className="search-close-switch"
              onClick={() => setShowModal(!showModal)}
            >
              <i className="icon_close"></i>
            </div>
            <form className="search-model-form">
              <input
                type="text"
                id="search-input"
                placeholder="Search here....."
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
