import Heading from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Atoms/Headings",
  component: Heading,
  tags: ["autodocs"],
  args: {
    Text: "Lorem ipsum dolor sit amet.",
  },

  argTypes: {
    level: { control: "-" },
    color: {
      options: [0, 1],
      mapping: ["", "darkOrange"],
      control: {
        type: "inline-radio",
        labels: ["Default", "Dark Orange"],
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const Template = (args) => <Heading {...args}>{args.Text}</Heading>;

export const H1 = Template.bind({});
H1.args = {
  level: "1",
};

export const H2 = Template.bind({});
H2.args = {
  level: "2",
};

export const H3 = Template.bind({});
H3.args = {
  level: "3",
};
export const H4 = Template.bind({});
H4.args = {
  level: "4",
};

export const H5 = Template.bind({});
H5.args = {
  level: "5",
};
