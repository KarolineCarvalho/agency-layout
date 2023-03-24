import styles from "./stylex.module.scss";
import Image from "next/image";

const SocialMediaLogo = ({ src, alt, height, width }) => {
  return (
    <div className={styles.socialMedia} key={alt}>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
};

export default SocialMediaLogo;
