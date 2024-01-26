const VideoSection = () => {
  return (
    <section
      className="video-section set-bg"
      style={{ backgroundImage: "url(img/video-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-text">
              <h2>Discover Our Hotel & Services.</h2>
              <p>
                Experience and explore our perfectly designed Luxury Apartments
                with outclass amenities.
              </p>
              <a
                href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                className="play-btn video-popup"
                target="_blank"
              >
                <img src="img/play.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
