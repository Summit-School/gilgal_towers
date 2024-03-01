import React, { useState, useEffect } from "react";
import { getRooms } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";

const RoomsComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);

  const formatMoney = (amount) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");
    return dollarUSLocale.format(amount);
  };

  const handlerGetRooms = async () => {
    try {
      setLoading(true);
      await dispatch(getRooms())
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload);
            setLoading(false);
            return;
          }
          setRooms(res.payload);
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
    handlerGetRooms();
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
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            {rooms.length > 0 ? (
              rooms.slice(0, 4).map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div
                      className="hp-room-item set-bg"
                      style={{
                        backgroundImage: `url('${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item.images[0]}')`,
                      }}
                    >
                      <div className="hr-text">
                        <h3>{item.title}</h3>
                        <h2>
                          {formatMoney(item.price)}FCFA<span>/Pernight</span>
                        </h2>
                        <table>
                          <tbody>
                            <tr>
                              <td className="r-o">Size:</td>
                              <td>{item.size} ft</td>
                            </tr>
                            <tr>
                              <td className="r-o">Capacity:</td>
                              <td>Max persion {item.capacity}</td>
                            </tr>
                            <tr>
                              <td className="r-o">Number of Beds:</td>
                              <td>{item.bed}</td>
                            </tr>
                            <tr>
                              <td className="r-o">Services:</td>
                              <td
                                style={{
                                  maxWidth: 220,
                                  display: "flex",
                                  flexWrap: "wrap",
                                }}
                              >
                                {item?.services[0]
                                  .split(",")
                                  .map((item, index) => (
                                    <span
                                      style={{ marginRight: 10 }}
                                      key={index}
                                    >
                                      {item},
                                    </span>
                                  ))}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a href={`/booking-details/${item._id}`}>
                          More Details
                        </a>
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
      </div>
    </section>
  );
};

export default RoomsComponent;
