import Avatar from "@atoms/Avatar";
import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";

const Author = ({ photo, name, job }) => {
  return (
    <div className={styles.author}>
      <span className={styles.author__avatar}>
        <Avatar image={photo} />
      </span>
      <Heading level="4">{name}</Heading>
      <Text>{job}</Text>
    </div>
  );
};

export default Author;
