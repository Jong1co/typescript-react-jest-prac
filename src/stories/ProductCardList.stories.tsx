import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProductCardSection from "../components/ProductCardSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default {
  title: "ProductCard",
  component: ProductCardSection,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </QueryClientProvider>
      );
    },
  ],
} as ComponentMeta<typeof ProductCardSection>;

export const CardList: ComponentStory<typeof ProductCardSection> = () => <ProductCardSection />;
