import {
  faCartArrowDown,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Rate from "../../Rate";
import styles from "./index.module.scss";

function TagItem() {
  const [rating, setRating] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headItem}>
        <div className={styles.imageContainer}>
          <img
            src="https://rubiktheme.com/demo/rb_azeno_demo/93-home_default/brown-bear-cushion.jpg"
            alt=""
            className={styles.image}
          />
          <img
            src="https://rubiktheme.com/demo/rb_azeno_demo/94-home_default/brown-bear-cushion.jpg"
            alt=""
            className={styles.image}
          />
          <div className={styles.new}>New</div>
          <div className={styles.icon}>
            <button className={styles.iconItem}>
              <FontAwesomeIcon icon={faCartArrowDown} fontSize="16" />
            </button>
            <button className={styles.iconItem}>
              <FontAwesomeIcon icon={faHeart} fontSize="16" />
            </button>
            <button className={styles.iconItem}>
              <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="16" />
            </button>
          </div>
        </div>
        <div className={styles.infoItem}>
          <button>FOOTWEAR</button>
          <Rate rating={rating} onRating={(num) => setRating(num)} />
        </div>
        <div className={styles.nameItem}>
          <button>AIR MAX 2090</button>
          <p style={{ cursor: "text" }}>$30.00</p>
        </div>
      </div>
    </div>
  );
}

export default TagItem;
