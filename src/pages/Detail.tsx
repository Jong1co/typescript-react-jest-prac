import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { getProductDetail } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { ProductList } from "../components/ProductCardSection";

const Detail = () => {
  const param = useParams();

  const { data: product, isLoading } = useQuery(["product", param.id], () => {
    if (param.id != null) return getProductDetail(param.id);
  });

  console.log(param.id);
  return <Layout>hi</Layout>;
};

export default Detail;
