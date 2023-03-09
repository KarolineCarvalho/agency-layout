import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import Heading from "@atoms/Heading";

const ImageCard = ({ label, title, image, featured }) => {
  return (
    <div
      className={`${styles.imageCard} ${
        styles[featured ? "imageCard--featured" : ""]
      }`}
    >
      <img
        className={styles.imageCard__background}
        alt="Card Background"
        src={image}
      />
      <div className={styles.tag}>
        <Text>{label}</Text>
      </div>
      <Heading level="3" color="white">
        {title}
      </Heading>
    </div>
  );
};

export default ImageCard;
