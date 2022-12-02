import styled from "styled-components";
import { ProductList } from "./ProductCardSection";

type ProductCardProps = {
  product: ProductList;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <img src={product.imageUrl} alt={product.title} />
      <div>
        <div className=''>
          <div>{product.title}</div>
          <div>&#8361;{product.price}</div>
        </div>
        <div>{product.category}</div>
      </div>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  margin: 16px 8px;
  display: flex;
  flex-flow: column nowrap;
`;
