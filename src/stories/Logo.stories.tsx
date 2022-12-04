import Logo from "../Atoms/Logo";
import { ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Header",
  component: Logo,
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof Logo>;

export const LogoComponent = () => <Logo />;
