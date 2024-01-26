import React, { useState } from "react";

const BookingFormComponent = () => {
  const [bookingType, setBookingType] = useState("room");

  return (
    <div>
      {(bookingType === "room" || bookingType === "apartment") && (
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
            <label for="date-in">Full Name:</label>
            <input type="text" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-in">Check In Date:</label>
            <input type="date" className="date-input" id="date-in" />
            {/* <i className="icon_calendar"></i> */}
          </div>
          <div className="check-date">
            <label for="date-in">Check In Time:</label>
            <input type="time" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-out">Check Out:</label>
            <input type="date" className="date-input" id="date-out" />
            {/* <i className="icon_calendar"></i> */}
          </div>
          <div className="check-date">
            <label for="date-in">Check Out Time:</label>
            <input type="time" className="date-input" id="date-in" />
          </div>
          <div className="select-option">
            <label for="guest">Guests Adults:</label>
            <select id="guest" className="nice-select">
              <option value="">1 Adults</option>
              <option value="">2 Adults</option>
              <option value="">3 Adults</option>
              <option value="">4 Adults</option>
              <option value="">5 Adults</option>
              <option value="">6 Adults</option>
              <option value="">7 Adults</option>
              <option value="">8 Adults</option>
              <option value="">9 Adults</option>
              <option value="">10 Adults</option>
            </select>
          </div>
          <div className="select-option">
            <label for="guest">Guests Kids:</label>
            <select id="guest" className="nice-select">
              <option value="">1 Kids</option>
              <option value="">2 Kids</option>
              <option value="">3 Kids</option>
              <option value="">4 Kids</option>
              <option value="">5 Kids</option>
              <option value="">6 Kids</option>
              <option value="">7 Kids</option>
              <option value="">8 Kids</option>
              <option value="">9 Kids</option>
              <option value="">10 Kids</option>
            </select>
          </div>
          <button type="submit">Confirm Booking</button>
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
            <input type="text" className="date-input" id="date-in" />
          </div>
          <div className="check-date">
            <label for="date-in">Event Start Date:</label>
            <input type="date" className="date-input" id="date-in" />
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
