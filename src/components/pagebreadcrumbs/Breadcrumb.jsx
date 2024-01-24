const BreadcrumbComponent = ({ title, slug }) => {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <h2>{title}</h2>
              <div className="bt-option">
                <a href="/">Home</a>
                <span>{slug}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
