import styles from "./styles.module.scss";
import Author from "@molecules/Author";
import Text from "@atoms/Text";
import Image from "next/image";
import Rating from "@molecules/Rating";

const TestimonialCard = ({ rate, comment, photo, name, job }) => {
  return (
    <div className={styles.testimonialCard}>
      <Rating rate={rate} />

      <Text>{comment}</Text>
      <Author photo={photo} name={name} job={job} />
    </div>
  );
};

export default TestimonialCard;
