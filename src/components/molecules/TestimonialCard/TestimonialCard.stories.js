import TestimonialCard from ".";

export default {
  component: TestimonialCard,
  title: "Molecules/Testimonial Card",
  tags: ["autodocs"],
  args: {
    rate: 10,
    comment:
      "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    name: "Alan Martí",
    job: "Meta Inc.",
    photo: "/images/testimonial-1.png",
  },
};

const Template = (args) => <TestimonialCard {...args} />;

export const Default = Template.bind({});
