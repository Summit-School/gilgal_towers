import Carousel from "react-bootstrap/Carousel";

const TestimonialsComponent = () => {
  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>What Customers Say?</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 offset-lg-0">
            <div className="testimonial-slider">
              <div className="ts-item">
                <p>
                  Staying at Gilgal Towers was an absolute delight! From the
                  moment we stepped into the lobby, we were greeted with warmth
                  and professionalism. The staff went above and beyond to ensure
                  our comfort throughout our entire stay. Our room was spacious,
                  impeccably clean, and boasted stunning views of the city
                  skyline.
                </p>
                <div className="ti-author">
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Mabel Tchoumba</h5>
                </div>
                <img src="img/testimonial-logo.png" alt="" />
              </div>
              <div className="ts-item">
                <p>
                  The amenities provided exceeded our expectations, and the
                  attention to detail was remarkable. We especially enjoyed the
                  sumptuous breakfast spread, which catered to all tastes.
                  Gilgal Towers truly offers a luxurious yet homely atmosphere,
                  making it the perfect choice for our getaway. We can't wait to
                  return!
                </p>
                <div className="ti-author">
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Eunice Ndifor</h5>
                </div>
                <img src="img/testimonial-logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
