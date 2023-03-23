import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import Image from "next/image";

const CategoryList = ({
  title,
  items,
  align,
  pointer,
  image = { src: "", height: "", width: "", alt: "" },
}) => {
  const classes = [styles.categoryList];
  classes.push(styles[`categoryList--${align}`]);

  return (
    <>
      {image.height !== "" ? (
        <div className={classes.join(" ")}>
          <Heading level="5" color="darkOrange">
            {title}
          </Heading>
          <Image {...image} />
        </div>
      ) : (
        <div className={classes.join(" ")}>
          <Heading level="5" color="darkOrange">
            {title}
          </Heading>
          {items.map((item) => (
            <Text key={item} pointer={pointer}>
              {item}
            </Text>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryList;
