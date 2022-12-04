import { Router } from "react-router-dom";
import Logo from "../Atoms/Logo";
import { ComponentMeta } from "@storybook/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default {
  title: "Header",
  component: Logo,
  decorators: [(story) => <BrowserRouter>{story()}</BrowserRouter>],
} as ComponentMeta<typeof Logo>;

export const LogoComponent = () => <Logo />;
