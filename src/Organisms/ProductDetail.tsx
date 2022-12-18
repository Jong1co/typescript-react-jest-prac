import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductDetail } from "../api/firebase";
import Button from "../Atoms/Button";
import { STALE_TIME } from "../utils/constant";

const ProductDetail = () => {
  const handleAddCard = () => {
    console.log("추가했다 !");
  };

  const param = useParams();
  const { data: product, isLoading } = useQuery(
    ["product", param.id],
    () => {
      if (param.id != null) return getProductDetail(param.id);
    },
    {
      staleTime: STALE_TIME.FIVE_MINUTES,
    }
  );
  if (isLoading) return <p>Loading...</p>;

  return (
    <Product>
      <img src={product?.imageUrl} alt={product?.title} />
      <div className=''>
        <span>{product?.category}</span>
        <span>{product?.title}</span>
        <span>{product?.price}</span>
        <span>{product?.options}</span>
        <Button text='장바구니 담기' onClickHandler={handleAddCard} />
      </div>
    </Product>
  );
};

export default ProductDetail;

const Product = styled.div`
  display: flex;
`;
