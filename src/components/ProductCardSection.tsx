import React from "react";
import ItemCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import { Product } from "../pages/AddProduct";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

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
    <CardSection>
      {products?.map((product) => {
        return (
          <CardLink key={product.id} to={`/product/${product.id}`}>
            <ItemCard product={product} />
          </CardLink>
        );
      })}
    </CardSection>
  );
};

export default ProductCardSection;

const CardSection = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  width: 18.5%;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
