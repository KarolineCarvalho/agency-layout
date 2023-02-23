import Text from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    Text: "Lorem ipsum dolor sit amet. Quo ipsa sint et esse quasi sed repellendus molestias in cupiditate omnis hic dolorum nulla a quis eveniet et Quis similique.",
  },

  argTypes: {
    size: { control: "-" },
    color: {
      options: [0, 1],
      mapping: ["", "darkGrey"],
      control: {
        type: "inline-radio",
        labels: ["Default", "Dark Grey"],
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const Template = (args) => <Text {...args}>{args.Text}</Text>;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  ...Default.args,
  size: "big",
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};

export const Label = Template.bind({});
Label.args = {
  ...Default.args,
  size: "label",
};
