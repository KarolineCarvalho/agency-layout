import Counter from ".";

export default {
  component: Counter,
  title: "Molecules/Counter",
  tags: ["autodocs"],
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  counter: 1000,
  symbol: "+",
  description: "Projects complete",
};

export const Abbreviate = Template.bind({});
Abbreviate.args = {
  ...Default.args,
  counter: 1000000,
};

export const NoSymbol = Template.bind({});
NoSymbol.args = {
  ...Default.args,
  symbol: "",
};
