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
                It S Hurricane Season But We Are Visiting Hilton Head Island
              </p>
              <a
                href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                className="play-btn video-popup"
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
