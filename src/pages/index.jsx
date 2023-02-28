import Counter from "@molecules/Counter";
import CounterGrid from "@atoms/CounterGrid";
import Hero from "@organisms/Hero";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Hero
        label="about"
        title="An Experience Design Agency"
        subtitle="Provides a full service range"
        description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
        buttonLabel="About Us"
        buttonType="purple"
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
