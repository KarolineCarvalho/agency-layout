import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import Line from "@atoms/Line";
import CategoryList from "@molecules/CategoryList";
import SocialMedias from "@molecules/SocialMedias";
import { menuList, socialMedia } from "@data/index.js";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        <Heading level="4">Agency</Heading>

        {menuList.map((i) => (
          <CategoryList
            key={i.title}
            title={i.title}
            items={i.items}
            pointer={true}
          />
        ))}

        <SocialMedias socialMediaArray={socialMedia} />

        <Line />

        <span className={styles.footer__copyright}>
          <Text color="lightBrown">
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </Text>
        </span>

        <span className={styles.footer__legal}>
          <Text pointer>Terms of Use</Text>
          <Text pointer>Privacy Policy</Text>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
