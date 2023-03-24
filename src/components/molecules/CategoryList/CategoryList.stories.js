import CategoryList from ".";

export default {
  component: CategoryList,
  title: "Molecules/CategoryList",
  tags: ["autodocs"],
  args: {
    title: "Menu",
    items: ["About", "Services", "Blog", "Contact"],
  },
  argTypes: {
    align: {
      options: [0, 1],
      mapping: ["left", ""],
      control: {
        type: "inline-radio",
        labels: ["Left", "Center"],
      },
    },
  },
};

const Template = (args) => <CategoryList {...args} />;

export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  align: "left",
  title: "Vortex",
  image: {
    src: "/images/vortex.png",
    width: 108,
    height: 32,
    alt: "Client's Project Logo",
  },
  items: null,
};
