import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";

import Text from "@atoms/Text";
import Button from "@atoms/Button";
import TitleSection from "@molecules/TitleSection";

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
          subtitleColor: "white",
          descriptionColor: "lightGrey",
        }
      : {
          subtitleColor: "",
          descriptionColor: "lightBrown",
        };

  return (
    <div className={styles.infoCard}>
      <TitleSection label={label} title={title} align="left" theme={theme} />

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
