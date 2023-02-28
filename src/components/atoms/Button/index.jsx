import styles from "./styles.module.scss";

const Button = ({ type, label }) => {
  const classList = [styles.button];
  classList.push(styles[`button--${type}`]);

  return <button className={`${classList.join(" ")}`}>{label}</button>;
};

export default Button;
