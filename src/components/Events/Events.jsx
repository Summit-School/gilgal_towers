import React, { useState, useEffect } from "react";
import { getEvents } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import { ThreeCircles } from "react-loader-spinner";

const EventSection = () => {
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
    <section className="blog-section blog-page spad">
      <div className="container">
        <div className="row">
          {events.length > 0 ? (
            events.map((item, index) => {
              const formattedDate = moment(item.createdAt).format(
                "Do MMMM, YYYY"
              );
              return (
                <div className="col-lg-4 col-md-6" key={index}>
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
          <div className="col-lg-12">
            <div className="load-more">
              <a href="#" className="primary-btn">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
