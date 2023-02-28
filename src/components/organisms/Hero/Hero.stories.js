import Hero from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Organisms/Hero",
  component: Hero,
  tags: ["autodocs"],
  args: {
    label: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet.",
    subtitle:
      "Lorem ipsum dolor sit amet. Quo ipsa sint et esse quasi sed repellendus",
    description:
      "Lorem ipsum dolor sit amet. Quo ipsa sint et esse quasi sed repellendus molestias in cupiditate omnis hic dolorum nulla a quis eveniet et Quis similique.",
    buttonLabel: "Lorem ",
    imgName: "hero-light-theme",
    imgType: "png",
  },

  argTypes: {
    imgType: { control: "-" },
    buttonType: {
      options: [0, 1, 2, 3, 4],
      mapping: ["", "orange", "darkBlue", "purple", "noBackground"],
      control: {
        type: "inline-radio",
        labels: ["Default", "Orange", "Dark Blue", "Purple", "No Background"],
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const Template = (args) => (
  <div style={{ zoom: 0.5 }}>
    <Hero {...args} />
  </div>
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  theme: "dark",
  imgName: "hero-dark-theme",
  buttonType: "purple",
};
