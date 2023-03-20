import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";

const CategoryList = ({ title, items, align }) => {
  const classes = [styles.categoryList];
  classes.push(styles[`categoryList--${align}`]);
  return (
    <div className={classes.join(" ")}>
      <Heading level="5" color="darkOrange">
        {title}
      </Heading>
      {items.map((item) => (
        <Text key={item} pointer>
          {item}
        </Text>
      ))}
    </div>
  );
};

export default CategoryList;
