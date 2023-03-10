import ImageCard from ".";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Molecules/Image Card",
  component: ImageCard,
  tags: ["autodocs"],
  args: {
    label: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet.",
    image: "images/imageCard-1.png",
    featured: true,
  },
};

const Template = (args) => (
  <div style={{ height: "416px", width: "570px" }}>
    <ImageCard {...args} />
  </div>
);

export const Default = Template.bind({});
