import styles from "./styles.module.scss";

const ImageCardGrid = ({ children, gridVariation }) => {
  const classes = [styles.imageCardGrid];
  classes.push(styles[`imageCardGrid--${gridVariation}`]);
  return <div className={classes.join(" ")}>{children}</div>;
};

export default ImageCardGrid;
