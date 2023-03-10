import ImageCard from "@molecules/ImageCard";
import ImageCardGrid from ".";

const cardImages = [
  {
    label: "Branding",
    title: "KeyBoard",
    image: "images/imageCard-1.png",
    featured: true,
  },
  { label: "Design", title: "SOFA", image: "images/imageCard-2.png" },
  {
    label: "Illustration",
    title: "Work Media",
    image: "images/imageCard-3.png",
  },
  { label: "Motion", title: "DDDone", image: "images/imageCard-4.png" },
  { label: "Branding", title: "HandP", image: "images/imageCard-5.png" },
];

const cardsThreeCol = [
  {
    label: "Branding",
    title: "KeyBoard",
    image: "images/imageCard-1.png",
  },
  { label: "Design", title: "SOFA", image: "images/imageCard-2.png" },
  {
    label: "Illustration",
    title: "Work Media",
    image: "images/imageCard-3.png",
  },
  { label: "Motion", title: "DDDone", image: "images/imageCard-4.png" },
  { label: "Branding", title: "HandP", image: "images/imageCard-5.png" },
  { label: "Design", title: "Abstract", image: "images/imageCard-6.png" },
  { label: "Motion", title: "Architect", image: "images/imageCard-7.png" },
  { label: "Design", title: "CalC", image: "images/imageCard-8.png" },
  { label: "Branding", title: "Sport", image: "images/imageCard-9.png" },
];

export default {
  component: ImageCardGrid,
  title: "Atoms/Image Card Grid",
  tags: ["autodocs"],
  argTypes: {
    gridVariation: {
      options: [0, 1],
      mapping: [
        [cardImages, "featuredImage"],
        [cardsThreeCol, "threeCol"],
      ],
      control: {
        type: "inline-radio",
        labels: ["Featured Image", "Three Columns"],
      },
    },
  },
};

const Template = (args) => (
  <div style={{ zoom: 0.4 }}>
    <ImageCardGrid gridVariation={args.gridVariation[1]}>
      {args.gridVariation[0].map((item, index) => (
        <ImageCard
          key={item.label + index}
          label={item.label}
          title={item.title}
          image={item.image}
          featured={item.featured}
        />
      ))}
    </ImageCardGrid>
  </div>
);

export const Default = Template.bind({});
