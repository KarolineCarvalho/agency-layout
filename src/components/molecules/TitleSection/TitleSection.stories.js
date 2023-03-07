import TitleSection from ".";

export default {
  component: TitleSection,
  title: "Molecules/Title Section",
  tags: ["autodocs"],
  args: {
    label: "Testimonials",
    title: "What Our Clients Say",
  },
  argTypes: {
    theme: {
      options: [0, 1],
      mapping: ["", "dark"],
      control: {
        type: "inline-radio",
        labels: ["Light", "Dark"],
      },
    },
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
const Template = (args) => <TitleSection {...args} />;

export const Default = Template.bind({});
