import Logo from "@atoms/Logo";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@atoms/Button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = isMenuOpen ? "header__menu--open" : "";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    /* stopScroll(); */
  };
  const stopScroll = () => {
    !isMenuOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "unset");
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />

        <ul className={`${styles.header__menu} ${styles[openMenu]}`}>
          <li className={styles.header__menuItem}>About</li>
          <li className={styles.header__menuItem}>Services</li>
          <li className={styles.header__menuItem}>Pricing</li>
          <li className={styles.header__menuItem}>Blog</li>
        </ul>

        <span className={styles.header__contact}>
          <Button label="Contact" type="noBackground" />
        </span>
        <div className={styles.header__menuIcons} onClick={toggleMenu}>
          {!isMenuOpen && (
            <Image
              src="/images/hamburger-menu.png"
              width={16}
              height={16}
              alt="Menu"
              className={styles.header__menuIcon}
            />
          )}
          {isMenuOpen && (
            <Image
              src="/images/close-icon.png"
              width={16}
              height={16}
              alt="Close Menu"
              className={styles.header__menuIcon}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
