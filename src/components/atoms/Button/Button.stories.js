import Button from ".";

export default {
  component: Button,
  title: "Atoms/Button",
  tags: ["autodocs"],
};

const Template = (args) => (
  <div style={{ zoom: 0.9 }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "",
  label: "lorem ipsum",
};

export const Orange = Template.bind({});
Orange.args = {
  ...Default.args,
  type: "orange",
};

export const DarkBlue = Template.bind({});
DarkBlue.args = {
  ...Default.args,
  type: "darkBlue",
};

export const Purple = Template.bind({});
Purple.args = {
  ...Default.args,
  type: "purple",
};

export const NoBackground = Template.bind({});
NoBackground.args = {
  ...Default.args,
  type: "noBackground",
};
