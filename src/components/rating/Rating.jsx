import React from "react";

const FullStar = ({ size = 20, color = "black" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const HalfStar = ({ size = 20, color = "black" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const EmptyStar = ({ size = 20, color = "black" }) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};
const Rating = ({
  size = 22,
  count = 5,
  value,
  isHalf = true,
  color,
  emptyIcon = <EmptyStar />,
  halfIcon = <HalfStar />,
  fullIcon = <FullStar />,
}) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    let star;
    if (isHalf && value - i > 0 && value - i < 1) {
      star = <HalfStar color={color} />;
    } else if (i < value) {
      star = <FullStar color={color} />;
    } else {
      star = <EmptyStar color={color} />;
    }

    stars.push(
      <span key={i} style={{ cursor: "pointer" }} className="p-0 m-0">
        {React.cloneElement(star, {
          size: size,
        })}
      </span>
    );
  }

  return (
    <>
      {value ? (
        <div className="d-flex">{stars}</div>
      ) : (
        <span className="ratting">
          <i className="icofont-ui-rating"></i>
          <i className="icofont-ui-rating"></i>
          <i className="icofont-ui-rating"></i>
          <i className="icofont-ui-rating"></i>
          <i className="icofont-ui-rating"></i>
        </span>
      )}
    </>
  );
};

export default Rating;
