import ProductItems from "../../ProductItems";
import styles from "./index.module.scss";

function ModelProduct() {
  return (
    <div className={styles.wrapper}>
      <p>NEW PRODUCTS</p>
      <div className={styles.product}>
        <ProductItems />
        <ProductItems />
        <ProductItems />
      </div>
    </div>
  );
}

export default ModelProduct;
