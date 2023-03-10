import Tag from ".";

export default {
  component: Tag,
  title: "Atoms/Tag",
  tags: ["autodocs"],
  args: {
    label: "Design",
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
