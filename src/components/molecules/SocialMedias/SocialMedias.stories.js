import SocialMedias from ".";
import { socialMedia } from "@data/index.js";

export default {
  title: "Molecules/Social Medias",
  component: SocialMedias,
  tags: ["autodocs"],
  args: {
    socialMediaArray: socialMedia,
  },
};

const Template = (args) => <SocialMedias {...args} />;

export const Default = Template.bind({});
