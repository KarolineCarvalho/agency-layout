import styles from "./styles.module.scss";
import Text from "@atoms/Text";

const Tag = ({ label }) => {
  return (
    <div className={styles.tag}>
      <Text>{label}</Text>
    </div>
  );
};

export default Tag;
