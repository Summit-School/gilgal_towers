import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bookRoom } from "../../redux/reducers/app";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const BookingFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [bookingType, setBookingType] = useState("room");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [guestAdults, setGuestAdults] = useState("");
  const [guestKids, setGuestKids] = useState("");
  //
  const [groupName, setGroupName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [numberofDelegates, setNumberofDelegates] = useState("");
  const [mealOption, setMealOption] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      if (
        bookingType &&
        username &&
        phoneNumber &&
        checkInDate &&
        checkInTime &&
        checkOutDate &&
        checkOutTime &&
        guestAdults &&
        guestKids
      ) {
        setLoading(true);
        const data = {
          bookingType,
          roomId: id,
          username,
          phoneNumber,
          checkInDate,
          checkInTime,
          checkOutDate,
          checkOutTime,
          guestAdults,
          guestKids,
        };
        await dispatch(bookRoom(data))
          .then((res) => {
            if (res.meta.requestStatus === "rejected") {
              toast.error(res.payload);
              setLoading(false);
              return;
            }
            if (res.meta.requestStatus === "fulfilled") {
              toast.success(res.payload.message);
              setLoading(false);
              return;
            }
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
            return;
          });
      } else {
        toast.error("All fields are required");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {(bookingType === "room" || bookingType === "apartment") && (
        <form action="#">
          {/* <div className="select-option">
            <label for="room">Booking Type:</label>
            <select
              id="room"
              className="nice-select"
              onChange={(e) => setBookingType(e.target.value)}
            >
              <option value="room" className="list">
                A Room
              </option>
              <option value="apartment" className="list">
                An Apartment
              </option>
              <option value="conference_hall" className="list">
                Conference Hall
              </option>
            </select>
          </div> */}
          <div className="check-date">
            <label for="date-in">Full Name:</label>
            <input
              type="text"
              className="date-input"
              id="date-in"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="check-date">
            <label for="date-in">Phone Number:</label>
            <input
              type="number"
              className="date-input"
              id="date-in"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="check-date">
            <label for="date-in">Check In Date:</label>
            <input
              type="date"
              className="date-input"
              id="date-in"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            {/* <i className="icon_calendar"></i> */}
          </div>
          <div className="check-date">
            <label for="date-in">Check In Time:</label>
            <input
              type="time"
              className="date-input"
              id="date-in"
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
            />
          </div>
          <div className="check-date">
            <label for="date-out">Check Out:</label>
            <input
              type="date"
              className="date-input"
              id="date-out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            {/* <i className="icon_calendar"></i> */}
          </div>
          <div className="check-date">
            <label for="date-in">Check Out Time:</label>
            <input
              type="time"
              className="date-input"
              id="date-in"
              value={checkOutTime}
              onChange={(e) => setCheckOutTime(e.target.value)}
            />
          </div>
          <div className="select-option">
            <label for="guest">Guests Adults:</label>
            <select
              id="guest"
              className="nice-select"
              onChange={(e) => setGuestAdults(e.target.value)}
            >
              <option value="1">1 Adults</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5 Adults</option>
              <option value="6">6 Adults</option>
              <option value="7">7 Adults</option>
              <option value="8">8 Adults</option>
              <option value="9">9 Adults</option>
              <option value="10">10 Adults</option>
            </select>
          </div>
          <div className="select-option">
            <label for="guest">Guests Kids:</label>
            <select
              id="guest"
              className="nice-select"
              onChange={(e) => setGuestKids(e.target.value)}
            >
              <option value="1">1 Kids</option>
              <option value="2">2 Kids</option>
              <option value="3">3 Kids</option>
              <option value="4">4 Kids</option>
              <option value="5">5 Kids</option>
              <option value="6">6 Kids</option>
              <option value="7">7 Kids</option>
              <option value="8">8 Kids</option>
              <option value="9">9 Kids</option>
              <option value="10">10 Kids</option>
            </select>
          </div>
          <button onClick={(e) => handleBooking(e)}>
            {loading ? "Loading..." : "Confirm Booking"}
          </button>
        </form>
      )}
      {bookingType === "conference_hall" && (
        <form action="#">
          <div className="select-option">
            <label for="room">Booking Type:</label>
            <select
              id="room"
              className="nice-select"
              onChange={(e) => setBookingType(e.target.value)}
            >
              <option value="room" className="list">
                A Room
              </option>
              <option value="apartment" className="list">
                An Apartment
              </option>
              <option value="conference_hall" className="list">
                Conference Hall
              </option>
            </select>
          </div>
          <div className="check-date">
            <label for="date-in">Group Name:</label>
            <input
              type="text"
              className="date-input"
              id="date-in"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="check-date">
            <label for="date-in">Event Start Date:</label>
            <input
              type="date"
              className="date-input"
              id="date-in"
              onChange={(e) => setGuestKids(e.target.value)}
            />
          </div>
          <div className="check-date">
            <label for="date-in">Event Start Time:</label>
            <input type="time" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-out">Event End Date:</label>
            <input type="date" className="date-input" id="date-out" />
          </div>
          <div className="check-date">
            <label for="date-in">Event End Time:</label>
            <input type="time" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-in">Full Name:</label>
            <input type="text" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-in">Phone Number:</label>
            <input type="number" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-in">Number of Delegates:</label>
            <input type="number" className="date-input" id="date-in" />
          </div>
          <div className="radio-select-div">
            <label>Meal Options:</label>
            <div className="radio-select-options">
              <div>
                <label>Breakfast:</label>
                <input type="radio" name="meals" />
              </div>
              <div>
                <label>Lunch:</label>
                <input type="radio" name="meals" />
              </div>
            </div>
          </div>
          <button type="submit">Confirm Booking</button>
        </form>
      )}
    </div>
  );
};

export default BookingFormComponent;
