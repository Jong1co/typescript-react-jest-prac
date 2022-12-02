import React from "react";
import ItemCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import { Product } from "../pages/AddProduct";

export type ProductList = Product & {
  id: string;
  imageUrl: string;
  options: string[];
  price: number;
};

const ProductCardSection = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductList[] | undefined>(["products"], getProducts, {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loding...</div>;
  return (
    <div>
      {products?.map((product) => {
        return <ItemCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductCardSection;
