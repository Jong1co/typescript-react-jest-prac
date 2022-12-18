import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { getProductDetail } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../utils/constant";
import ProductDetail from "../Organisms/ProductDetail";

const Detail = () => {
  return (
    <Layout>
      <ProductDetail />
    </Layout>
  );
};

export default Detail;
