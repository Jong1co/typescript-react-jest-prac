import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { getProductDetail } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "../utils/constant";

const Detail = () => {
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

  return (
    <Layout>
      <div className=''>
        <img src={product?.imageUrl} alt={product?.title} />
        <span>{product?.category}</span>
        <span>{product?.title}</span>
        <span>{product?.price}</span>
        <span>{product?.options}</span>
      </div>
    </Layout>
  );
};

export default Detail;
