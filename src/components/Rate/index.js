import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback, useMemo, useState } from "react";
import styles from "./index.module.scss";
import { memo } from "react";

function Rate({ count, rating, color, onRating }) {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = useCallback(
    (index) => {
      if (hoverRating >= index) {
        return color.filled;
      } else if (!hoverRating && rating >= index) {
        return color.filled;
      }

      return color.unfilled;
    },
    [hoverRating, color, rating]
  );

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FontAwesomeIcon
          key={idx}
          className={styles.star}
          icon={faStar}
          onClick={() => onRating(idx)}
          color="rgb(121, 115, 115)"
          fontSize="12px"
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, getColor, onRating]);

  return <div>{starRating}</div>;
}

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 5,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default memo(Rate);
