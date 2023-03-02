import Rating from ".";

export default {
  component: Rating,
  title: "Atoms/Rating",
  tags: ["autodocs"],
  args: {
    rate: 5,
  },
  argTypes: {
    rate: {
      control: { type: "number", min: 0, max: 10 },
    },
  },
};

const Template = (args) => <Rating {...args} />;

export const Default = Template.bind({});
