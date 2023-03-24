import styles from "./styles.module.scss";

const ResponsiveImages = ({ imgName, imgType, alt }) => {
  return (
    <picture>
      <source
        srcSet={`images/${imgName}@2x.${imgType}`}
        media="(min-width: 992px)"
        alt={alt}
        className={styles.responsiveImage}
      />
      <img
        src={`images/${imgName}.${imgType}`}
        alt={alt}
        className={styles.responsiveImage}
      />
    </picture>
  );
};

export default ResponsiveImages;
