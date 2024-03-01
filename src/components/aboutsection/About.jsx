const AboutComponent = () => {
  return (
    <>
      <section className="aboutus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>
                    Experience an <br />
                    Elevated Lifestyle
                  </h2>
                </div>
                <p className="f-para">
                  We at GilGal Inc are offering unique, expertly designed
                  apartments for rent with high-end amenities and World-Class
                  services. Exceptional features include Gym, Canteen,
                  Conference Hall for 50 persons, Beauty salon, Supermarket,
                  Bridal store and Outdoor dine in.
                </p>
                <p className="s-para">
                  Rent an apartment with us and enjoy a wonderful experience! We
                  are continuously providing value-added services just for you.
                </p>
                <a href="/about-us" className="primary-btn about-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-pic">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="img/about/about-hompage.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="img/about/about1-homepage.png"
                      alt=""
                      height={300}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <div className="about-text">
                <div className="section-title">
                  <span>Our Vision</span>
                  <h2>Building Highlights</h2>
                </div>
                <p className="f-para">
                  Our vision is to provide a world-class luxurious living for
                  people. Our main objective is to make sure a great stay for
                  all our renters by offering you complete rental accommodation
                  with an upfront booking process.
                </p>
                {/* <p className="s-para">
                  Rent an apartment with us and enjoy a wonderful experience! We
                  are continuously providing value-added services just for you.
                </p> */}
                <a href="/about-us" className="primary-btn about-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-pic">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="img/about/vision2.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="img/about/vision.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
