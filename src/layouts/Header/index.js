import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import HeaderInfo from "../components/HeaderInfo";
import SideBar from "../components/Sidebar";
import styles from "./index.module.scss";

const IMG_HEADER = [
  {
    id: 1,
    url: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_slider6-5.jpg?v=1633921481",
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_slider6-4.jpg?v=1633921481",
  },
  {
    id: 3,
    url: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_slider6-1.jpg?v=1633921452",
  },
];

function Header() {
  const [changeColorHeader, setChangeColorHeader] = useState(true);
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

  const [currentImg, setCurrentImg] = useState(0);
  const changeLeft = () => {
    if (currentImg > 0) {
      setCurrentImg(currentImg - 1);
    }
  };
  const changeRight = () => {
    if (currentImg <= IMG_HEADER.length - 1) {
      setCurrentImg(currentImg + 1);
    }

    if (currentImg === IMG_HEADER.length - 1) {
      setCurrentImg(currentImg);
    }
  };

  const changeIng = setTimeout(() => {
    if (currentImg === IMG_HEADER.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }, 4000);

  useEffect(() => {
    return () => {
      clearTimeout(changeIng);
    };
  }, [changeIng]);

  return (
    <div className={styles.wrapper}>
      <div
        className={
          changeColorHeader ? styles.showHeaderInfo : styles.hideHeaderInfo
        }
      >
        <HeaderInfo />
      </div>
      <div
        className={changeColorHeader ? styles.showSidebar : styles.hideSidebar}
      >
        <SideBar />
      </div>
      <div className={styles.img}>
        <img src={IMG_HEADER[currentImg].url} alt={IMG_HEADER[currentImg].id} />
        <div className={styles.buttonLeft}>
          <button onClick={changeLeft}>
            <FontAwesomeIcon icon={faAngleLeft} fontSize="50" />
          </button>
        </div>
        <div className={styles.buttonRight}>
          <button onClick={changeRight}>
            <FontAwesomeIcon icon={faAngleRight} fontSize="50" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
