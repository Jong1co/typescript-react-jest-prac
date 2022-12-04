import styled from "styled-components";
import { ProductList } from "./ProductCardSection";

type ProductCardProps = {
  product: ProductList;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const priceDataFormat = new Intl.NumberFormat().format(product.price);

  return (
    <Card>
      <img src={product.imageUrl} alt={product.title} />
      <div className='product'>
        <div className='product__info'>
          <div className='product__title'>{product.title}</div>
          <div>&#8361;{priceDataFormat}</div>
        </div>
        <div className='product__category'>{product.category}</div>
      </div>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  margin: 16px 8px;
  display: flex;
  flex-flow: column nowrap;
  .product {
    display: flex;
    flex-direction: column;
  }
  .product__info {
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
  }
  .product__title {
    font-weight: bold;
  }

  .product__category {
    color: gray;
  }
`;
