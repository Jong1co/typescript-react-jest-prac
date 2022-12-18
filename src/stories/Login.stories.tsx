import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Atoms/Button";

export default {
  title: "Header",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Login = Template.bind({});
Login.args = {
  text: "Login",
  onClickHandler: () => console.log("login"),
};

export const Logout = Template.bind({});
Logout.args = {
  text: "Logout",
  onClickHandler: () => console.log("logout"),
};
