import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginButton, { LoginButtonProps } from "../Atoms/LoginButton";

export default {
  title: "Header",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;
export const Login = Template.bind({});
Login.args = {
  text: "Login",
  loginHandler: () => console.log("login"),
};

export const Logout = Template.bind({});
Logout.args = {
  text: "Logout",
  loginHandler: () => console.log("logout"),
};
