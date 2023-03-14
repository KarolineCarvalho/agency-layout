import styles from "./styles.module.scss";

const Text = ({ size, color, children, pointer }) => {
  const classList = [styles.text];
  classList.push(styles[`text--${size}`]);
  classList.push(styles[`text--${color}`]);
  classList.push(styles[`text--${pointer === true ? "pointer" : ""}`]);

  return <p className={`${classList.join(" ")}`}>{children}</p>;
};

export default Text;
