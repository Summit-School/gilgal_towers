const AboutSection = () => {
  return (
    <section className="aboutus-page-section spad">
      <div className="container">
        <div className="about-page-text">
          <div className="row">
            <div className="col-lg-6">
              <div className="ap-title">
                <h2>Welcome To Sona.</h2>
                <p>
                  Built in 1910 during the Belle Epoque period, this hotel is
                  located in the center of Paris, with easy access to the city’s
                  tourist attractions. It offers tastefully decorated rooms.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <ul className="ap-services">
                <li>
                  <i className="icon_check"></i> 20% Off On Accommodation.
                </li>
                <li>
                  <i className="icon_check"></i> Complimentary Daily Breakfast
                </li>
                <li>
                  <i className="icon_check"></i> 3 Pcs Laundry Per Day
                </li>
                <li>
                  <i className="icon_check"></i> Free Wifi.
                </li>
                <li>
                  <i className="icon_check"></i> Discount 20% On F&B
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-page-services">
          <div className="row">
            <div className="col-md-4">
              <div
                className="ap-service-item set-bg"
                style={{ backgroundImage: "url(img/about/about-p1.jpg)" }}
              >
                <div className="api-text">
                  <h3>Restaurants Services</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="ap-service-item set-bg"
                style={{ backgroundImage: "url(img/about/about-p2.jpg)" }}
              >
                <div className="api-text">
                  <h3>Travel & Camping</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="ap-service-item set-bg"
                style={{ backgroundImage: "url(img/about/about-p3.jpg)" }}
              >
                <div className="api-text">
                  <h3>Event & Party</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
