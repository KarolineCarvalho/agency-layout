import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import Line from "@atoms/Line";

const menuList = [
  {
    title: "Menu",
    items: ["About", "Services", "Blog", "Contact"],
  },
  {
    title: "Serivce",
    items: ["Design", "Development", "Marketing", "See More"],
  },
];
const socialMedia = [
  { alt: "Facebook Logo", src: "images/facebook.png" },
  { alt: "Twitter Logo", src: "images/twitter.png" },
  { alt: "Instagram Logo", src: "images/instagram.png" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        <Heading level="4">Agency</Heading>

        {menuList.map((i) => (
          <div key={i.title} className={styles.footer__list}>
            <Heading level="5" color="darkOrange">
              {i.title}
            </Heading>
            {i.items.map((item) => (
              <Text key={item} pointer>
                {item}
              </Text>
            ))}
          </div>
        ))}

        <div className={styles.footer__social}>
          {socialMedia.map((item) => (
            <div className={styles.socialMedia} key={item.alt}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

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
