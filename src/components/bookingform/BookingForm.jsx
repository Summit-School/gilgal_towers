const BookingFormComponent = () => {
  return (
    <form action="#">
      <div className="check-date">
        <label for="date-in">Check In:</label>
        <input type="date" className="date-input" id="date-in" />
        {/* <i className="icon_calendar"></i> */}
      </div>
      <div className="check-date">
        <label for="date-out">Check Out:</label>
        <input type="date" className="date-input" id="date-out" />
        {/* <i className="icon_calendar"></i> */}
      </div>
      <div className="select-option">
        <label for="guest">Guests:</label>
        <select id="guest" className="nice-select">
          <option value="">2 Adults</option>
          <option value="">3 Adults</option>
        </select>
      </div>
      <div className="select-option">
        <label for="room">Room:</label>
        <select id="room" className="nice-select">
          <option value="" className="list">
            1 Room
          </option>
          <option value="" className="list">
            2 Room
          </option>
        </select>
      </div>
      <button type="submit">Check Availability</button>
    </form>
  );
};

export default BookingFormComponent;
