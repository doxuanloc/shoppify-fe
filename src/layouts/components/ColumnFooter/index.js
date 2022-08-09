import styles from "./index.module.scss";

const FOOTER_BUTTON = [
  {
    title: "GET HELP",
    items: [
      "Delivery",
      "Legal Notice",
      "Terms and conditions of use",
      " About us",
      "Secure payment",
    ],
  },
  {
    title: "SERVICES",
    items: ["Suppliers", "Stores", "Identity", "Sitemap", "Contact us"],
  },
  {
    title: "MY ACCOUNT",
    items: ["My account", "Order history", "Addresses", "Identity", "Login"],
  },
];
function ColumnFooter({ title, item }) {
  return (
    <div className={styles.wrapper}>
      {FOOTER_BUTTON.map((column, index) => (
        <div className={styles.column}>
          <p>{column.title}</p>
          {column.items.map((btn, index) => (
            <button>{btn}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ColumnFooter;
