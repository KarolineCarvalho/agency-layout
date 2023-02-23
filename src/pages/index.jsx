import Counter from "@molecules/Counter";
import CounterGrid from "@atoms/CounterGrid";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CounterGrid>
        <Counter counter={42} symbol="%" description="Years of experience" />
        <Counter counter={73} symbol="+" description="Agency members" />
        <Counter counter={"5000"} description="Projects complete" />
      </CounterGrid>
    </div>
  );
};
export default Home;
