import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";
import Tag from "@atoms/Tag";

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

      <Tag label={label} />
      <Heading level="3" color="white">
        {title}
      </Heading>
    </div>
  );
};

export default ImageCard;
