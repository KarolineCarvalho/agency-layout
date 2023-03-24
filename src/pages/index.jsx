import styles from "../styles/Home.module.scss";
import Counter from "@molecules/Counter";
import CounterGrid from "@atoms/CounterGrid";
import Hero from "@organisms/Hero";
import TestimonialCard from "@molecules/TestimonialCard";
import TestimonialGrid from "@atoms/TestimonialsGrid";
import TitleSection from "@molecules/TitleSection";
import ImageCard from "@molecules/ImageCard";
import ImageCardGrid from "@atoms/ImageCardGrid";
import ArticleHero from "@organisms/ArticleHero";
import { testimonials, cardImages, cardsThreeCol } from "@data/index";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero
        theme="dark"
        label="about"
        title="An Experience Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        buttonLabel="About Us"
        buttonType="purple"
        imgName="hero-dark-theme"
        imgType="png"
      />
      <Hero
        label="about"
        title="An Experience Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        buttonLabel="About Us"
        imgName="hero-light-theme"
        imgType="png"
      />
      <div className={styles.home__content}>
        <CounterGrid>
          <Counter counter={42} symbol="%" description="Years of experience" />
          <Counter counter={73} symbol="+" description="Agency members" />
          <Counter counter={"5000"} description="Projects complete" />
        </CounterGrid>

        <section className={styles.testimonialsSection}>
          <TitleSection label="Testimonials" title="What Our Clients Say" />
          <TestimonialGrid>
            {testimonials.map((i) => (
              <TestimonialCard
                key={i.name}
                rate={i.rate}
                comment={i.comment}
                photo={i.photo}
                name={i.name}
                job={i.job}
              />
            ))}
          </TestimonialGrid>
        </section>
        <ImageCardGrid gridVariation="featuredImage">
          {cardImages.map((item, index) => (
            <ImageCard
              key={item.label + index}
              label={item.label}
              title={item.title}
              image={item.image}
              featured={item.featured}
            />
          ))}
        </ImageCardGrid>
        <ArticleHero />
      </div>
    </div>
  );
};
export default Home;
