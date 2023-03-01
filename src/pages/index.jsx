import Counter from "@molecules/Counter";
import CounterGrid from "@atoms/CounterGrid";
import Hero from "@organisms/Hero";
import Author from "@molecules/Author";
import TestimonialCard from "@molecules/TestimonialCard";
import TestimonialGrid from "@atoms/TestimonialsGrid";

const Home = () => {
  const testimonials = [
    {
      rate: 10,
      comment:
        "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
      photo: "/images/avatar.png",
      name: "Alan Martí",
      job: "Meta Inc.",
    },
    {
      rate: 7,
      comment:
        "Provide your business with a variety of digital solutions to promote your product or service online.",
      photo: "/images/avatar.png",
      name: "Richardo Kann",
      job: "Photogram",
    },
    {
      rate: 5,
      comment:
        "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
      photo: "/images/avatar.png",
      name: "Graham Griffiths",
      job: "Twitor",
    },
    {
      rate: 2,
      comment:
        "Promote your product or service online and help you hit your marketing goals and grow your business.",
      photo: "/images/avatar.png",
      name: "Maria Trofimova",
      job: "Whochat",
    },
  ];
  return (
    <div>
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
      <Hero
        label="about"
        title="An Experience Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        buttonLabel="About Us"
        imgName="hero-light-theme"
        imgType="png"
      />
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
      <CounterGrid>
        <Counter counter={42} symbol="%" description="Years of experience" />
        <Counter counter={73} symbol="+" description="Agency members" />
        <Counter counter={"5000"} description="Projects complete" />
      </CounterGrid>
    </div>
  );
};
export default Home;
