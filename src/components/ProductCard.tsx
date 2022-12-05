import styled from "styled-components";
import { ProductList } from "./ProductCardSection";

type ProductCardProps = {
  product: Pick<ProductList, "imageUrl" | "title" | "category" | "price">;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const priceDataFormat = new Intl.NumberFormat().format(product.price);

  return (
    <Card>
      <div className='card__content'>
        <img src={product.imageUrl} alt={product.title} />
        <div className='product'>
          <div className='product__info'>
            <div className='product__title'>{product.title}</div>
            <div>&#8361;{priceDataFormat}</div>
          </div>
          <div className='product__category'>{product.category}</div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 lightgray;
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 8px;

  .card__content {
    margin: 16px 8px;
    display: flex;
    flex-direction: column;
  }

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
