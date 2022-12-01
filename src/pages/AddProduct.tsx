import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export type Product = {
  title: string;
  price: string;
  category: string;
  description: string;
  options: string;
};

const AddProduct = () => {
  const [file, setFile] = useState<File>();
  const [product, setProduct] = useState<Product>({
    title: "",
    price: "",
    category: "",
    description: "",
    options: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, files } = e.target;
    if (name === "file" && files != null) {
      setFile(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file != null) {
      uploadImage(file) //
        .then((url) => addNewProduct(product, url));
    }
  };

  return (
    <Layout>
      <h3>새로운 제품 등록</h3>
      <AddProductForm onSubmit={handleSubmit}>
        {/* file data를 출력할 때에는 URL.createObjectURL 사용 */}
        {file && <img src={URL.createObjectURL(file)} alt='preview' />}
        <input type='file' accept='image/*' name='file' required onChange={handleChange} />
        <input
          type='text'
          required
          name='title'
          value={product.title}
          onChange={handleChange}
          placeholder='제품명'
        />
        <input
          className='price'
          type='number'
          name='price'
          value={product.price}
          onChange={handleChange}
          placeholder='가격'
        />
        <input
          type='text'
          name='category'
          value={product.category}
          onChange={handleChange}
          placeholder='카테고리'
        />
        <input
          type='text'
          name='description'
          value={product.description}
          onChange={handleChange}
          placeholder='제품 설명'
        />
        <input
          type='text'
          name='options'
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
