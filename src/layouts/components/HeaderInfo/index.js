import styles from "./index.module.scss";
import {
  faAngleDown,
  faEnvelope,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ModelPrice from "../../../components/Models/ModelHeader";

function HeaderInfo() {
  const [showOpPrice, setShowOpPrice] = useState(false);
  const [showOpLanguage, setShowOpLanguage] = useState(false);
  const TogglerOpPrice = () => {
    setShowOpPrice(!showOpPrice);
  };
  const TogglerOpLanguage = () => {
    setShowOpLanguage(!showOpLanguage);
  };

  if (showOpPrice && showOpLanguage === true) {
    setShowOpPrice(!showOpPrice);
    setShowOpLanguage(!showOpLanguage);
  } else {
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <FontAwesomeIcon icon={faRotateLeft} />
        <p>We’ve extended our returns period to 60 days.</p>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon icon={faEnvelope} />
        <p>locvkv1234@gmail.com</p>
        <span>|</span>
        <button onClick={TogglerOpPrice}>
          <div>
            USD $ {"  "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          {showOpPrice && (
            <div className={styles.price}>
              <ModelPrice>USD $</ModelPrice>
              <ModelPrice>EUR €</ModelPrice>
            </div>
          )}
        </button>
        <button onClick={TogglerOpLanguage}>
          <div>
            ENGLISH{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </div>
          {showOpLanguage && (
            <div className={styles.language}>
              <ModelPrice>
                <div className={styles.item}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png"
                    alt="cc"
                  />
                  <p>English</p>
                </div>
              </ModelPrice>
              <ModelPrice>
                <div className={styles.item}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png"
                    alt="cc"
                  />
                  <p>English</p>
                </div>
              </ModelPrice>
              <ModelPrice>
                <div className={styles.item}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png"
                    alt="cc"
                  />
                  <p>English</p>
                </div>
              </ModelPrice>
              <ModelPrice>
                <div className={styles.item}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png"
                    alt="cc"
                  />
                  <p>English</p>
                </div>
              </ModelPrice>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default HeaderInfo;
