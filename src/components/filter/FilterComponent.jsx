// import React, { useState } from "react";
import styles from "../../css/filter/filter.module.css";

const FilterComponent = () => {
  return (
    <form action="#" className={`container ${styles.filter_form}`}>
      <div>
        <div className={styles.input_div}>FILTER OPTIONS</div>
      </div>
      <div className={styles.select_option}>
        <select id="room" className={styles.input_style}>
          <option value="room" className="list">
            Select Rental Type
          </option>
          <option value="room" className="list">
            Rooms
          </option>
          <option value="apartment" className="list">
            Apartments
          </option>
          <option value="conference_hall" className="list">
            Conference Hall
          </option>
        </select>
      </div>
      <div className={styles.select_option}>
        <div className={styles.input_div}>
          <input
            type="number"
            placeholder="Min Price"
            className={styles.input_style}
          />
        </div>
      </div>
      <div className={styles.select_option}>
        <div className={styles.input_div}>
          <input
            type="number"
            placeholder="Max Price"
            className={styles.input_style}
          />
        </div>
      </div>
    </form>
  );
};

export default FilterComponent;
