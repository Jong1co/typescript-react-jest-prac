import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";

const AddProduct = () => {
  const [productImg, setProductImg] = useState();

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
          accept='image/png, image/jpeg'
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <input type='text' placeholder='제품명' />
        <input type='text' placeholder='가격' />
        <input type='text' placeholder='카테고리' />
        <input type='text' placeholder='제품 설명' />
        <input type='text' placeholder='옵션들(콤마(,)로 구분)' />
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
