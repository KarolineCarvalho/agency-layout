import SocialMediaLogo from "../SocialMediaLogo";

export default {
  component: SocialMediaLogo,
  title: "Atoms/SocialMediaLogo",
  tags: ["autodocs"],
  args: {
    alt: "Instagram Logo",
    src: "/images/instagram.png",
    width: 20,
    height: 20,
  },
};

const Template = (args) => <SocialMediaLogo {...args} />;

export const Default = Template.bind({});
