import Avatar from ".";

export default {
  component: Avatar,
  title: "Atoms/Avatar",
  tags: ["autodocs"],
  args: {
    image: "/images/avatar.png",
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
