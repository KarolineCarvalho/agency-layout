import styles from "../styles/Home.module.scss";
import Counter from "@molecules/Counter";
import CounterGrid from "@atoms/CounterGrid";
import Hero from "@organisms/Hero";
import TestimonialCard from "@molecules/TestimonialCard";
import TestimonialGrid from "@atoms/TestimonialsGrid";
import TitleSection from "@molecules/TitleSection";
import ImageCard from "@molecules/ImageCard";
import ImageCardGrid from "@atoms/ImageCardGrid";

const Home = () => {
  const testimonials = [
    {
      rate: 10,
      comment:
        "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
      name: "Alan Martí",
      job: "Meta Inc.",
      photo: "/images/testimonial-1.png",
    },
    {
      rate: 7,
      comment:
        "Provide your business with a variety of digital solutions to promote your product or service online.",
      name: "Richardo Kann",
      job: "Photogram",
      photo: "/images/testimonial-2.png",
    },
    {
      rate: 5,
      comment:
        "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
      name: "Graham Griffiths",
      job: "Twitor",
      photo: "/images/testimonial-3.png",
    },
    {
      rate: 2,
      comment:
        "Promote your product or service online and help you hit your marketing goals and grow your business.",
      name: "Maria Trofimova",
      job: "Whochat",
      photo: "/images/testimonial-4.png",
    },
  ];
  const cardImages = [
    {
      label: "Branding",
      title: "KeyBoard",
      image: "images/imageCard-1.png",
      featured: true,
    },
    { label: "Design", title: "SOFA", image: "images/imageCard-2.png" },
    {
      label: "Illustration",
      title: "Work Media",
      image: "images/imageCard-3.png",
    },
    { label: "Motion", title: "DDDone", image: "images/imageCard-4.png" },
    { label: "Branding", title: "HandP", image: "images/imageCard-5.png" },
  ];

  const cardsThreeCol = [
    {
      label: "Branding",
      title: "KeyBoard",
      image: "images/imageCard-1.png",
    },
    { label: "Design", title: "SOFA", image: "images/imageCard-2.png" },
    {
      label: "Illustration",
      title: "Work Media",
      image: "images/imageCard-3.png",
    },
    { label: "Motion", title: "DDDone", image: "images/imageCard-4.png" },
    { label: "Branding", title: "HandP", image: "images/imageCard-5.png" },
    { label: "Design", title: "Abstract", image: "images/imageCard-6.png" },
    { label: "Motion", title: "Architect", image: "images/imageCard-7.png" },
    { label: "Design", title: "CalC", image: "images/imageCard-8.png" },
    { label: "Branding", title: "Sport", image: "images/imageCard-9.png" },
  ];
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
      </div>
    </div>
  );
};
export default Home;
