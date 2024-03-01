import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvent, getEvents } from "../../redux/reducers/app";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  InstapaperShareButton,
  InstapaperIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const EventDetailsComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [otherEvents, setOtherEvents] = useState([]);

  const currentUrl = window.location.href;

  const handlerGetEvent = async () => {
    try {
      setLoading(true);
      await dispatch(getEvent(id))
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          }
          setEvent(res.payload);
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

  const filterEvents = () => {
    const filtered = events.filter((item) => item.title !== event.title);
    setOtherEvents(filtered);
  };

  useEffect(() => {
    handlerGetEvent();
    handlerGetEvents();
  }, [id]);

  useEffect(() => {
    filterEvents();
  }, [events]);

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
    <div>
      <section
        className="blog-details-hero set-bg"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/uploads/gallery/${event?.image[0]})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bd-hero-text">
                <span>{event?.category}</span>
                <h2>{event?.title}</h2>
                <ul>
                  <li className="b-time">
                    <i className="icon_clock_alt"></i>{" "}
                    {moment(event?.createdAt).format("Do MMMM, YYYY")}
                  </li>
                  <li>
                    <i className="icon_profile"></i> Gilgal Towers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="blog-details-text">
                <div className="bd-title">
                  <p>{event?.details}</p>
                </div>
                {/* <div className="bd-pic">
                  <div className="bp-item">
                    <img
                      src="/img/blog/blog-details/blog-details-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bp-item">
                    <img
                      src="/img/blog/blog-details/blog-details-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="bp-item">
                    <img
                      src="/img/blog/blog-details/blog-details-3.jpg"
                      alt=""
                    />
                  </div>
                </div> */}
                {/* <div className="bd-more-text">
                  <div className="bm-item">
                    <h4>If you live in New York City</h4>
                    <p>
                      You know all about the traffic there. Getting places is
                      often next to impossible, even with the gazillion yellow
                      cabs. If you’re like me you often look with envy at those
                      shiny limousines with their unformed drivers and wish you
                      could sit in one. Well, you can. New York limo service is
                      more affordable than you think, whether it’s for Newark
                      airport transportation, LaGuardia airport transportation,
                      or to drive wherever you wish to go.
                    </p>
                  </div>
                  <div className="bm-item">
                    <h4>Every time I hail a cab in New York City</h4>
                    <p>
                      I hope I’ll be lucky enough to get one that’s halfway
                      decent and that the driver actually speaks English. I have
                      spent many anxious moments wondering if I ever get to my
                      destination. Or whether I’d get ripped off. Even if all
                      goes well, I can’t say I can remember many rides in New
                      York cabs that were very pleasant. And given how much they
                      cost by now, going with a limo makes ever more sense.
                    </p>
                  </div>
                </div> */}
                <div className="tag-share">
                  <div className="tags">
                    <a href="#">{event?.category}</a>
                  </div>
                  <div className="social-share">
                    <span>Share:</span>
                    <a href="#">
                      <FacebookShareButton
                        url={currentUrl}
                        quote={event?.title}
                        hashtag={`#${event?.category}`}
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </a>
                    <a href="#">
                      {/* <i className="fa fa-twitter"></i> */}
                      <TwitterShareButton
                        url={currentUrl}
                        quote={event?.title}
                        hashtag={`#${event?.category}`}
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </a>
                    <a href="#">
                      <InstapaperShareButton
                        url={currentUrl}
                        quote={event?.title}
                        hashtag={`#${event?.category}`}
                      >
                        <InstapaperIcon size={32} round />
                      </InstapaperShareButton>
                    </a>
                    <a href="#">
                      <WhatsappShareButton
                        url={currentUrl}
                        quote={event?.title}
                        hashtag={`#${event?.category}`}
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </a>
                    <a href="#">
                      <TelegramShareButton
                        url={currentUrl}
                        quote={event?.title}
                        hashtag={`#${event?.category}`}
                      >
                        <TelegramIcon size={32} round />
                      </TelegramShareButton>
                    </a>
                  </div>
                </div>
                {/* <div className="comment-option">
                  <h4>2 Comments</h4>
                  <div className="single-comment-item first-comment">
                    <div className="sc-author">
                      <img
                        src="/img/blog/blog-details/avatar/avatar-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="sc-text">
                      <span>27 Aug 2019</span>
                      <h5>Brandon Kelley</h5>
                      <p>
                        Neque porro qui squam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora. incidunt ut labore et dolore
                        magnam.
                      </p>
                      <a href="#" className="comment-btn">
                        Like
                      </a>
                      <a href="#" className="comment-btn">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-item reply-comment">
                    <div className="sc-author">
                      <img
                        src="/img/blog/blog-details/avatar/avatar-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="sc-text">
                      <span>27 Aug 2019</span>
                      <h5>Brandon Kelley</h5>
                      <p>
                        Neque porro qui squam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora. incidunt ut labore et dolore
                        magnam.
                      </p>
                      <a href="#" className="comment-btn like-btn">
                        Like
                      </a>
                      <a href="#" className="comment-btn reply-btn">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-item second-comment ">
                    <div className="sc-author">
                      <img
                        src="/img/blog/blog-details/avatar/avatar-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="sc-text">
                      <span>27 Aug 2019</span>
                      <h5>Brandon Kelley</h5>
                      <p>
                        Neque porro qui squam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora. incidunt ut labore et dolore
                        magnam.
                      </p>
                      <a href="#" className="comment-btn">
                        Like
                      </a>
                      <a href="#" className="comment-btn">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="leave-comment">
                  <h4>Leave A Comment</h4>
                  <form action="#" className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-12 text-center">
                        <input type="text" placeholder="Website" />
                        <textarea placeholder="Messages"></textarea>
                        <button type="submit" className="site-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recommend-blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Other Events</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {otherEvents.length > 0 ? (
              otherEvents?.slice(0, 3).map((item, index) => {
                const formattedDate = moment(item.createdAt).format(
                  "Do MMMM, YYYY"
                );
                return (
                  <div className="col-md-4" key={index}>
                    <div
                      className="blog-item set-bg"
                      style={{
                        backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.image[0]})`,
                      }}
                    >
                      <div className="bi-text">
                        <span className="b-tag">{item.category}</span>
                        <h4>
                          <a href={`/event-details/${item._id}`}>
                            {item.title}
                          </a>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsComponent;
