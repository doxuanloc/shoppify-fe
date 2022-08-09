import styles from "./index.module.scss";

const LIST_OPTION_SHOP = [
  { title: "CLOTHES", items: ["Baby suit", "Jackets", "Men", "Women"] },
  {
    title: "ACCESSORIES",
    items: ["Baby Shoes", "Hats & hats", "Accessories", "Stationery"],
  },
  { title: "KIDS", items: ["Baby suit", "Jeans", "Scarves", "Sunglasses"] },
];

function ModelShop() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {LIST_OPTION_SHOP.map((item) => (
          <div className={styles.container}>
            <p>{item.title}</p>
            <ul>
              {item.items.map((i, idx) => (
                <li key={idx}>
                  <button>{i}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.image}>
        <img
          src="https://rubiktheme.com/demo/rb_azeno_demo/modules/rbthememenu/views/img/upload/img3-7.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default ModelShop;
