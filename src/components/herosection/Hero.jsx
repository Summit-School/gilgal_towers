import BookingFormComponent from "../bookingform/BookingForm";

const HeroComponent = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url(img/hero/hero-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text">
              <h1>Sona A Luxury Hotel</h1>
              <p>
                Here are the best hotel booking sites, including recommendations
                for international travel and for finding low-priced hotel rooms.
              </p>
              <a href="#" className="primary-btn">
                Discover Now
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
            <div className="booking-form">
              <h3>Booking Your Hotel</h3>
              <BookingFormComponent />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero-slider owl-carousel">
        <div
          className="hs-item set-bg"
          style={{ backgroundImage: "url(img/hero/hero-1.jpg)" }}
        ></div>
        <div
          className="hs-item set-bg"
          style={{ backgroundImage: "url(/img/hero/hero-2.jpg)" }}
        ></div>
        <div
          className="hs-item set-bg"
          style={{ backgroundImage: "url(/img/hero/hero-3.jpg)" }}
        ></div>
      </div> */}
    </section>
  );
};

export default HeroComponent;
