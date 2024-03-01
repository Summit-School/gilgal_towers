import React, { useState, useEffect } from "react";
import { getRooms } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { ThreeCircles } from "react-loader-spinner";

const RoomsSection = () => {
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

  // Pagiination Logic
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = rooms.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(rooms.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rooms.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

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
    <section className="rooms-section spad">
      <div className="container">
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="room-item">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/uploads/gallery/${item?.images[0]}`}
                      alt=""
                      style={{ height: "250px", width: "100%" }}
                    />
                    <div className="ri-text">
                      <h4>{item.title}</h4>
                      <h3>
                        {formatMoney(item.price)}FCFA<span>/Pernight</span>
                      </h3>
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
                            <td className="r-o">Bed:</td>
                            <td>{item.bed}</td>
                          </tr>
                          <tr>
                            <td className="r-o">Services:</td>
                            <div
                              style={{
                                maxWidth: 220,
                                display: "flex",
                                flexWrap: "wrap",
                              }}
                            >
                              {item?.services[0].split(",").map((item) => (
                                <td style={{ marginRight: 10 }}>{item},</td>
                              ))}
                            </div>
                          </tr>
                        </tbody>
                      </table>
                      <a
                        href={`/booking-details/${item._id}`}
                        className="primary-btn"
                      >
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

          <div className="col-lg-12">
            <div className="room-pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel={
                  <span>
                    Next <i className="fa fa-long-arrow-right"></i>
                  </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={
                  <span>
                    <i className="fa fa-long-arrow-left"></i> Previous
                  </span>
                }
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                previousLinkClassName="room-pagination-previous"
                nextLinkClassName="room-pagination-next"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
