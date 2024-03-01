import React, { useState, useEffect } from "react";
import { getGalleryImages } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";

const GallerSection = ({ otherPage }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const handlerGetImages = async () => {
    try {
      setLoading(true);
      await dispatch(getGalleryImages())
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          }
          setImages(res.payload);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlerGetImages();
  }, []);

  const getUrlsAndCategory = () => {
    const imageData = images.reduce((accumulator, item) => {
      const { category, images } = item;

      // Map over the images array and create objects with imageURL and category
      const categoryImages = images.map((image) => ({
        category,
        imageURL: image,
      }));

      // Concatenate the new array of objects with the accumulator
      return accumulator.concat(categoryImages);
    }, []);
    setUrls(imageData);
  };

  useEffect(() => {
    getUrlsAndCategory();
  }, [images]);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#ccc"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
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
          {urls.length > 0 ? (
            otherPage ? (
              urls.slice(0, 6).map((item, index) => {
                return (
                  <div className={"col-lg-4"} key={index}>
                    <div
                      className="gallery-item set-bg"
                      style={{
                        backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.imageURL}')`,
                      }}
                    >
                      <div className="gi-text">
                        <h3>{item.category}</h3>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              urls.map((item, index) => {
                return (
                  <div className={"col-lg-4"} key={index}>
                    <div
                      className="gallery-item set-bg"
                      style={{
                        backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.imageURL}')`,
                      }}
                    >
                      <div className="gi-text">
                        <h3>{item.category}</h3>
                      </div>
                    </div>
                  </div>
                );
              })
            )
          ) : (
            <div className="text-center">
              <p>No Records Found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerSection;
