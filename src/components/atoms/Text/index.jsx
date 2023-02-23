import styles from "./styles.module.scss";

const Text = ({ size, color, children }) => {
  const classList = [styles.text];
  classList.push(styles[`text--${size}`]);
  classList.push(styles[`text--${color}`]);

  return <p className={`${classList.join(" ")}`}>{children}</p>;
};

export default Text;
