import styles from "./styles.module.scss";
import React from "react";

const Heading = ({ color, level, children }) => {
  const classList = [styles.heading];
  classList.push(styles[`heading--${color}`]);
  classList.push(styles[`heading--h${level}`]);

  const props = { className: classList.join(" ") };
  return React.createElement("h" + level, props, children);
};
export default Heading;
