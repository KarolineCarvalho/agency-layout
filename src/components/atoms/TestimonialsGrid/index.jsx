import styles from "./styles.module.scss";

const TestimonialGrid = ({ children }) => {
  console.log(children);
  return (
    <div className={styles.testimonialGrid}>
      {children[0]}

      <div className={styles.subContainer}>
        {children[2]}
        {children[1]}
      </div>
      {children[3]}
    </div>
  );
};

export default TestimonialGrid;
