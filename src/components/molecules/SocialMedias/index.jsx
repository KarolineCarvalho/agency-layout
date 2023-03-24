import styles from "./styles.module.scss";
import SocialMediaLogo from "@atoms/SocialMediaLogo";

const SocialMedias = ({ socialMediaArray }) => {
  return (
    <div className={styles.socialMediaGrid}>
      {socialMediaArray.map((item) => (
        <SocialMediaLogo key={item.alt} {...item} />
      ))}
    </div>
  );
};

export default SocialMedias;
