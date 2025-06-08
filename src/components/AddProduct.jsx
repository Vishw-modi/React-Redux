import React from "react";
import { useAddProductMutation } from "../app/service/dummydata";

const AddProduct = () => {
  const [addProduct, { isLoading, isError, data }] = useAddProductMutation();
  console.log(isLoading);

  const handleaddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
      };
    } catch (err) {
      console.log(`Error has Occured: ${err}`);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <>
      <div>AddProduct</div>;
      <button onClick={handleaddProduct} disabled={isLoading}>
        {isLoading ? "Loading..." : "Add Product"}
      </button>
    </>
  );
};

export default AddProduct;
