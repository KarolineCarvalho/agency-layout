import Image from "next/image";
import styles from "./styles.module.scss";

const Avatar = ({ image }) => {
  return (
    <Image
      className={styles.avatar}
      height={80}
      width={80}
      src={image}
      alt="User's Avatar"
    />
  );
};

export default Avatar;
