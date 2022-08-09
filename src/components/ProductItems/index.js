import styles from "./index.module.scss";

function ProductItems() {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://rubiktheme.com/demo/rb_azeno_demo/214-home_default/brown-bear-cushion.jpg"
        alt=""
      />
      <div className={styles.infoItem}>
        <button>VITAL RISE SPORTS BRA</button>
        <p>Color-Black</p>
        <p style={{ fontWeight: "700" }}>$41.00</p>
      </div>
    </div>
  );
}

export default ProductItems;
