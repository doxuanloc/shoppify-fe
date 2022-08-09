import {
  faAmazon,
  faFacebook,
  faShopify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnFooter from "../components/ColumnFooter";
import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ColumnFooter />
        <div className={styles.input}>
          <p>NEWSLETTER</p>
          <h4>
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </h4>
          <input placeholder="Your email address"></input>
          <span>
            <button>Subscribe</button>
          </span>
        </div>
      </div>
      <div className={styles.line}>
        <p>© 2022 - Ecommerce software by PrestaShop™</p>
        <div className={styles.social}>
          <button>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAmazon} />
          </button>
          <button>
            <FontAwesomeIcon icon={faShopify} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
