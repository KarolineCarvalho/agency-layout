import Counter from "@molecules/Counter";
import CounterGrid from ".";

function renderNtimes(n) {
  const number = [...Array(n)];
  return number.map((index) => (
    <Counter
      key={index}
      counter={42}
      symbol="%"
      description="Years of experience"
    />
  ));
}

export default {
  component: CounterGrid,
  title: "Atoms/Counter Grid",
  tags: ["autodocs"],
  args: { Quantity: 3 },
  argTypes: {
    Quantity: {
      options: [0, 1, 2, 3], // An array of serializable values
      mapping: [1, 2, 3, 4], // Maps serializable option values to complex arg values
      control: {
        type: "inline-radio",
        labels: ["1", "2", "3", "4"],
      },
    },
  },
};

const Template = (args) => (
  <CounterGrid>{renderNtimes(args.Quantity)}</CounterGrid>
);

export const Default = Template.bind({});
