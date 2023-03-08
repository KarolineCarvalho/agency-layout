import styles from "./styles.module.scss";
import InfoCard from "@molecules/InfoCard";

/* PROPS */
//theme | label | title | subtitle | description | buttonLabel | buttonType | imgName | imgType
const Hero = (props) => {
  return (
    <div className={`${styles.hero} ${styles[`hero--${props.theme}`]}`}>
      <div className={styles.hero__content}>
        <picture>
          <source
            srcSet={`images/${props.imgName}@2x.${props.imgType}`}
            media="(min-width: 992px)"
            alt="Hero"
            className={styles.hero__image}
          />
          <img
            src={`images/${props.imgName}.${props.imgType}`}
            alt="Hero"
            className={styles.hero__image}
          />
        </picture>

        <div className={styles.hero__info}>
          <InfoCard {...props} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
