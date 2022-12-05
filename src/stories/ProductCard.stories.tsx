import ProductCard from "../Molecules/ProductCard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductCardSection from "../Organisms/ProductCardSection";

export default {
  title: "ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  product: {
    imageUrl:
      "http://res.cloudinary.com/dwohpjji9/image/upload/v1669989136/gfv8xkckywnjbw57awuu.webp",
    title: "이쁜 원피스",
    category: "여성",
    price: 120000,
  },
};
