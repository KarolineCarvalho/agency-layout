import styles from "./styles.module.scss";

const ImageCardGrid = ({ children }) => {
  return <div className={styles.imageCardGrid}>{children}</div>;
};

export default ImageCardGrid;
