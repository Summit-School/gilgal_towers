const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-text">
          <div className="row">
            <div className="col-lg-4">
              <div className="ft-about">
                <div className="logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" width={130} />
                  </a>
                </div>
                <p>
                  Experience and explore our perfectly designed Luxury
                  Apartments with outclass amenities.
                </p>
                <div className="fa-social">
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
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>+237 233 333 888</li>
                  <li>info@gilgaltowers.com</li>
                  <li>
                    Gilgal Tower, Newtown Limbe, South West Region, Cameroon
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>
                <form action="#" className="fn-form">
                  <input type="text" placeholder="Email" />
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="co-text">
                <p>
                  Copyright &copy;
                  {currentYear} All rights reserved <br /> Designed with{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://summittech-eng.org" target="_blank">
                    Summit Tech Ltd
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
