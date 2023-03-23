import Heading from "@atoms/Heading";
import styles from "./styles.module.scss";
import Text from "@atoms/Text";
import CategoryList from "@molecules/CategoryList";
import Image from "next/image";

const ArticleHero = (props) => {
  const category = {
    title: "category",
    list: [
      "Art Direction",
      "User Interface",
      "Branding Strategy",
      "Print Design",
      "3D Render",
    ],
  };
  return (
    <div className={styles.articleHero}>
      <Heading level="1">Work Media Project </Heading>
      <Text size="big">
        Agency provides a full service range including technical skills, design,
        business understanding.
      </Text>
      <Text color="lightBrown">
        Outsource your digital marketing efforts, instead of handling in-house.
        They can provide your business with a variety of digital solutions to
        promote your product or service online and help you.
      </Text>
      <div className={styles.articleHero__infos}>
        <span className={styles.articleHero__infoItem}>
          <CategoryList
            title={category.title}
            items={category.list}
            align="left"
          />
        </span>
        <span className={styles.articleHero__infoItem}>
          <CategoryList
            title="Vortex"
            align="left"
            image={{
              src: "/images/vortex.png",
              width: 108,
              height: 32,
              alt: "Client's Project Logo",
            }}
          />
        </span>
        <span className={styles.articleHero__infoItem}>
          <CategoryList title="Date" items={["Dec 2021"]} align="left" />
        </span>
      </div>
    </div>
  );
};

export default ArticleHero;
