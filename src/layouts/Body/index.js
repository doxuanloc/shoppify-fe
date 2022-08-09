import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TagItem from "../../components/Tags/TagItem";
import TagSale from "../../components/Tags/TagSale";
import styles from "./index.module.scss";

const IMG_SALE = [
  {
    id: 1,
    src: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_img7-1.jpg?v=1635410197",
    content: "20% OFF ALL ITEMS",
  },
  {
    id: 2,
    src: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_img7-2.jpg?v=1635410197",
    content: "NEW ARRIVALS",
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/azeno_img7-3.jpg?v=1635410197",
    content: "MUST HAVE 2021",
  },
];

function Body() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerHome}>
        {IMG_SALE.map((i) => (
          <TagSale src={i.src} alt={i.id} key={i.id}>
            {i.content}
          </TagSale>
        ))}
      </div>
      <div className={styles.listItem}>
        <p>
          TRENDING NEAR YOU <span style={{ color: "red" }}>.</span>
        </p>
        <div className={styles.btn}>
          <button>FOOTWEAR</button>
          <button>MENS</button>
          <button>WOMEMS</button>
        </div>
      </div>
      <div className={styles.tagItem}>
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
      </div>
      <div className={styles.dragRight}>
        SCROLL ME{" "}
        <span>
          <FontAwesomeIcon icon={faRightLong} />
        </span>
      </div>
    </div>
  );
}

export default Body;
