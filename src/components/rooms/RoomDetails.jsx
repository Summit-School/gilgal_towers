import React, { useState, useEffect } from "react";
import BookingFormComponent from "../bookingform/BookingForm";
import { useParams } from "react-router-dom";
import { getRoom } from "../../redux/reducers/app";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const RoomDetailsComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState(null);

  const formatMoney = (amount) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");
    return dollarUSLocale.format(amount);
  };

  const handlerGetRoom = async () => {
    try {
      setLoading(true);
      await dispatch(getRoom(id))
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          }
          setRoom(res.payload);
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
    handlerGetRoom();
  }, [id]);

  useEffect(() => {
    setCurrentImage(room?.images[0]);
  }, [room]);

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
    <section className="room-details-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="room-details-item">
              <img
                src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${currentImage}`}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="image-options">
                {room?.images.map((item) => (
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item}`}
                    alt="Room Image"
                    onClick={() => setCurrentImage(item)}
                  />
                ))}
              </div>
              <div className="rd-text">
                <div className="rd-title">
                  <h3>{room?.title}</h3>
                  <div className="rdt-right">
                    <div className="rating">
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star"></i>
                      <i className="icon_star-half_alt"></i>
                    </div>
                    <a href="#">Will be available in 4 days</a>
                  </div>
                </div>
                <h2>
                  {formatMoney(room?.price)}FCFA<span>/Pernight</span>
                </h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>{room?.size} ft</td>
                    </tr>
                    <tr>
                      <td className="r-o">Capacity:</td>
                      <td>Max persion {room?.capacity}</td>
                    </tr>
                    <tr>
                      <td className="r-o">Number of Beds:</td>
                      <td>{room?.bed}</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <div
                        style={{
                          maxWidth: 420,
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {room?.services[0].split(",").map((item) => (
                          <td style={{ marginRight: 10 }}>{item},</td>
                        ))}
                      </div>
                    </tr>
                  </tbody>
                </table>
                <p className="f-para">{room?.desc}</p>
              </div>
            </div>
            <div className="rd-reviews">
              <h4>Reviews</h4>
              <div className="review-item">
                <div className="ri-pic">
                  <img src="/img/room/avatar/avatar-1.jpg" alt="" />
                </div>
                <div className="ri-text">
                  <span>27 Aug 2019</span>
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>Brandon Kelley</h5>
                  <p>
                    Neque porro qui squam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora. incidunt ut labore et dolore magnam.
                  </p>
                </div>
              </div>
              <div className="review-item">
                <div className="ri-pic">
                  <img src="/img/room/avatar/avatar-2.jpg" alt="" />
                </div>
                <div className="ri-text">
                  <span>27 Aug 2019</span>
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>Brandon Kelley</h5>
                  <p>
                    Neque porro qui squam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora. incidunt ut labore et dolore magnam.
                  </p>
                </div>
              </div>
            </div>
            <div className="review-add">
              <h4>Add Review</h4>
              <form action="#" className="ra-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Email*" />
                  </div>
                  <div className="col-lg-12">
                    <div>
                      <h5>You Rating:</h5>
                      <div className="rating">
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star-half_alt"></i>
                      </div>
                    </div>
                    <textarea placeholder="Your Review"></textarea>
                    <button type="submit">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="room-booking">
              <h3>Your Reservation</h3>
              <BookingFormComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailsComponent;
