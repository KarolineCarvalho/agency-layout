import TestimonialsGrid from ".";
import TestimonialCard from "@molecules/TestimonialCard";

const testimonials = [
  {
    rate: 10,
    comment:
      "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.",
    name: "Alan Martí",
    job: "Meta Inc.",
    photo: "/images/testimonial-1.png",
  },
  {
    rate: 7,
    comment:
      "Provide your business with a variety of digital solutions to promote your product or service online.",
    name: "Richardo Kann",
    job: "Photogram",
    photo: "/images/testimonial-2.png",
  },
  {
    rate: 5,
    comment:
      "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
    name: "Graham Griffiths",
    job: "Twitor",
    photo: "/images/testimonial-3.png",
  },
  {
    rate: 2,
    comment:
      "Promote your product or service online and help you hit your marketing goals and grow your business.",
    name: "Maria Trofimova",
    job: "Whochat",
    photo: "/images/testimonial-4.png",
  },
];

export default {
  component: TestimonialsGrid,
  title: "Atoms/Testimonials Grid",
  tags: ["autodocs"],
  args: { Quantity: 3 },
  argTypes: {
    Quantity: {
      options: [0, 1, 2, 3],
      mapping: [
        [testimonials[0]],
        [testimonials[0], testimonials[1]],
        [testimonials[0], testimonials[1], testimonials[2]],
        [testimonials[0], testimonials[1], testimonials[2], testimonials[3]],
      ],
      control: {
        type: "inline-radio",
        labels: ["1", "2", "3", "4"],
      },
    },
  },
};

const Template = (args) => (
  <div style={{ zoom: 0.6 }}>
    <TestimonialsGrid>
      {args.Quantity.map((testimonial) => (
        <TestimonialCard key={testimonial.name} {...testimonial} />
      ))}
    </TestimonialsGrid>
  </div>
);

export const Default = Template.bind({});
