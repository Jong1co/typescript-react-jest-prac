import React from "react";
import { ProductList } from "./ProductCardSection";

type ProductCardProps = {
  product: ProductList;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.id}</div>;
};

export default ProductCard;
