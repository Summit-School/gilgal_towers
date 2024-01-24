const GallerSection = () => {
  return (
    <section className="gallery-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Our Gallery</span>
              <h2>Discover Our Work</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="gallery-item set-bg"
              style={{ backgroundImage: "url(img/gallery/gallery-1.jpg)" }}
            >
              <div className="gi-text">
                <h3>Room Luxury</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="gallery-item set-bg"
                  style={{ backgroundImage: "url(img/gallery/gallery-3.jpg)" }}
                >
                  <div className="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="gallery-item set-bg"
                  style={{ backgroundImage: "url(img/gallery/gallery-4.jpg)" }}
                >
                  <div className="gi-text">
                    <h3>Room Luxury</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="gallery-item large-item set-bg"
              style={{ backgroundImage: "url(img/gallery/gallery-2.jpg)" }}
            >
              <div className="gi-text">
                <h3>Room Luxury</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerSection;
