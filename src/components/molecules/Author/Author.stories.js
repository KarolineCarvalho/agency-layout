import Author from ".";

export default {
  component: Author,
  title: "Molecules/Author",
  tags: ["autodocs"],
  args: {
    name: "Alan Martí",
    job: "Meta Inc.",
    photo: "/images/testimonial-1.png",
  },
};

const Template = (args) => <Author {...args} />;

export const Default = Template.bind({});
