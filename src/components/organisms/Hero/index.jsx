import styles from "./styles.module.scss";
import InfoCard from "@molecules/InfoCard";
import ResponsiveImage from "@molecules/ResponsiveImage";

/* PROPS */
//theme | label | title | subtitle | description | buttonLabel | buttonType | imgName | imgType
const Hero = (props) => {
  return (
    <div className={`${styles.hero} ${styles[`hero--${props.theme}`]}`}>
      <div className={styles.hero__content}>
        <ResponsiveImage
          imgName={props.imgName}
          imgType={props.imgType}
          alt="Hero"
        />

        <div className={styles.hero__info}>
          <InfoCard {...props} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
