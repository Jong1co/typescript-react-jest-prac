import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";

type Product = {
  title: string;
  price: number | "";
  category: string;
  description: string;
  options: string;
};

const AddProduct = () => {
  const [file, setFile] = useState("");
  const [product, setProduct] = useState<Product>({
    title: "",
    price: "",
    category: "",
    description: "",
    options: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Layout>
      <h3>새로운 제품 등록</h3>
      <AddProductForm
        action=''
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          type='file'
          accept='image/*'
          required
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <input type='text' required value={product.title} onChange={handleChange} placeholder='제품명' />
        <input type='number' required value={product.price} onChange={handleChange} placeholder='가격' />
        <input type='text' required value={product.category} onChange={handleChange} placeholder='카테고리' />
        <input type='text' required value={product.description} onChange={handleChange} placeholder='제품 설명' />
        <input
          type='text'
          required
          value={product.options}
          onChange={handleChange}
          placeholder='옵션들(콤마(,)로 구분)'
        />
        <button>제품 등록</button>
      </AddProductForm>
    </Layout>
  );
};

export default AddProduct;

const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
`;
