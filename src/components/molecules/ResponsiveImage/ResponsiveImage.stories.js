import ResponsiveImage from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Molecules/Responsive Image",
  component: ResponsiveImage,
  tags: ["autodocs"],
  args: {
    imgName: "hero-dark-theme",
    imgType: "png",
    alt: "Hero",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args

const Template = (args) => <ResponsiveImage {...args} />;

export const Default = Template.bind({});
