import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";

import Text from "@atoms/Text";
import Button from "@atoms/Button";

const InfoCard = ({
  theme,
  label,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonType,
}) => {
  const appTheme =
    theme === "dark"
      ? {
          titleColor: "white",
          subtitleColor: "white",
          descriptionColor: "lightGrey",
        }
      : {
          titleColor: "",
          subtitleColor: "",
          descriptionColor: "lightBrown",
        };

  return (
    <div className={styles.infoCard}>
      <Heading level="5" color="darkOrange">
        {label}
      </Heading>
      <Heading color={appTheme.titleColor} level="2">
        {title}
      </Heading>
      <Text color={appTheme.subtitleColor} size="big">
        {subtitle}
      </Text>
      <Text color={appTheme.descriptionColor}>{description}</Text>
      <Button type={buttonType} label={buttonLabel} />

      {/* {<Button type="noBackground" label={buttonLabel} />} */}
    </div>
  );
};

export default InfoCard;
