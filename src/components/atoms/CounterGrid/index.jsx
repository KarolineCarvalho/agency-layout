import styles from "./styles.module.scss";

const CounterGrid = ({ children }) => {
  return <div className={styles.counterGrid}>{children}</div>;
};

export default CounterGrid;
