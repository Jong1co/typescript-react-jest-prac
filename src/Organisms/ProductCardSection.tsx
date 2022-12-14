import React from "react";
import ItemCard from "../Molecules/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type ProductList = {
  title: string;
  category: string;
  description: string;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 8px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
