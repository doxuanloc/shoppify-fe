import styles from "./index.module.scss";

function TagSale({ src, children, id }) {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={id} />
      <div className={styles.content}>
        <h1>{children}</h1>
        <button>SHOP COLLECTION</button>
      </div>
    </div>
  );
}

export default TagSale;
