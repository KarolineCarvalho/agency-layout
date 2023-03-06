import styles from "./styles.module.scss";
import Heading from "@atoms/Heading";

const TitleSection = ({ theme, label, title, align }) => {
  const classList = [styles.titleSection];
  classList.push(styles[`titleSection--${align}`]);

  const appTheme = theme === "dark" ? "white" : "";
  return (
    <div className={`${classList.join(" ")}`}>
      <Heading level="5" color="darkOrange">
        {label}
      </Heading>
      <Heading level="2" color={appTheme}>
        {title}
      </Heading>
    </div>
  );
};

export default TitleSection;
