import {
  faAngleDown,
  faCartArrowDown,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ModelProduct from "../../../components/Models/ModelProduct";
import ModelShop from "../../../components/Models/ModelShop";

import styles from "./index.module.scss";

function SideBar() {
  const [changeColorHeader, setChangeColorHeader] = useState(true);
  const [over, setOver] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      setChangeColorHeader(false);
    } else {
      setChangeColorHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [changeColorHeader]);
  return (
    <div className={changeColorHeader ? styles.wrapper : styles.wrapperColor}>
      <div className={styles.left}>
        <img
          src="https://rubiktheme.com/demo/rb_azeno_demo/themes/rb_azeno/assets/img/logo_white.png"
          alt="d"
        />
        <nav className={styles.nav}>
          <button>
            HOME{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
          <button
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
          >
            SHOP{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
          <button>
            PRODUCT{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
          <button>BLOG</button>
          <button>
            PAGE{" "}
            <span>
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </button>
        </nav>
      </div>
      <div className={styles.right}>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <div className={styles.cart}>
            <p>0</p>
          </div>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </button>
      </div>
      <div
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {over && <ModelShop />}
        {over && <ModelProduct />}
      </div>
    </div>
  );
}

export default SideBar;
