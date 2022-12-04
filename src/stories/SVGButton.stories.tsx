import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SVGButton from "../Atoms/SVGButton";

export default {
  title: "Header",
  component: SVGButton,
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof SVGButton>;

const Template: ComponentStory<typeof SVGButton> = (args) => <SVGButton {...args} />;

export const Cart = Template.bind({});
Cart.args = {
  param: "my-cart",
};

export const AddNewProduct = Template.bind({});
AddNewProduct.args = {
  param: "add-product",
};
