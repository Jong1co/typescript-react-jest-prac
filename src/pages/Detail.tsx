import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  console.log(param.id);
  return <div></div>;
};

export default Detail;
