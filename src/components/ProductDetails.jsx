import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../app/service/dummydata";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, isloading } = useGetProductByIdQuery(id);
  console.log(data);

  return <div>ProductDetails of id: {id}</div>;
};

export default ProductDetails;
