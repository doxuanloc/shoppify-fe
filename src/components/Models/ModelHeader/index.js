import styles from "./index.module.scss";
function ModelPrice({ children }) {
  return (
    <div className={styles.wrapper}>
      <button>{children}</button>
    </div>
  );
}

export default ModelPrice;
