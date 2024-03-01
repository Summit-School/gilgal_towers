import React, { useState, useEffect } from "react";
import { getEvents } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import { ThreeCircles } from "react-loader-spinner";

const BlogComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const handlerGetEvents = async () => {
    try {
      setLoading(true);
      await dispatch(getEvents())
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          }
          setEvents(res.payload);
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
    handlerGetEvents();
  }, []);

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
    <section className="blog-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Hotel News</span>
              <h2>Events</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {events.length > 0 ? (
            events.slice(0, 5).map((item, index) => {
              const formattedDate = moment(item.createdAt).format(
                "Do MMMM, YYYY"
              );
              return (
                <div
                  className={index === 3 ? "col-lg-8" : "col-lg-4"}
                  key={index}
                >
                  <div
                    className="blog-item set-bg"
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.image[0]})`,
                    }}
                  >
                    <div className="bi-text">
                      <span className="b-tag">{item.category}</span>
                      <h4>
                        <a href={`/event-details/${item._id}`}>{item.title}</a>
                      </h4>
                      <div className="b-time">
                        <i className="icon_clock_alt"></i> {formattedDate}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center">
              <p>No Records Found</p>
            </div>
          )}
          {/* <div className="col-lg-4">
            <div
              className="blog-item set-bg"
              style={{ backgroundImage: "url(img/blog/blog-2.jpg)" }}
            >
              <div className="bi-text">
                <span className="b-tag">Camping</span>
                <h4>
                  <a href="#">Choosing A Static Caravan</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt"></i> 15th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item set-bg"
              style={{ backgroundImage: "url(img/blog/blog-3.jpg)" }}
            >
              <div className="bi-text">
                <span className="b-tag">Event</span>
                <h4>
                  <a href="#">Copper Canyon</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt"></i> 21th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="blog-item small-size set-bg"
              style={{ backgroundImage: "url(img/blog/blog-wide.jpg)" }}
            >
              <div className="bi-text">
                <span className="b-tag">Event</span>
                <h4>
                  <a href="#">
                    Trip To Iqaluit In Nunavut A Canadian Arctic City
                  </a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt"></i> 08th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item small-size set-bg"
              style={{ backgroundImage: "url(img/blog/blog-10.jpg)" }}
            >
              <div className="bi-text">
                <span className="b-tag">Travel</span>
                <h4>
                  <a href="#">Traveling To Barcelona</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt"></i> 12th April, 2019
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
