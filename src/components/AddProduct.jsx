import React, { useEffect, useState } from "react";
import { useAddProductMutation } from "../app/service/dummydata";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [showsuccess, setShowSuccess] = useState(false);
  const [addProduct, { isLoading, isError, isSuccess, data }] =
    useAddProductMutation();

  useEffect(() => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [isSuccess]);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const newProductData = {
        id: Number(id),
        title,
      };
      const result = await addProduct(newProductData).unwrap();

      console.log(result);
    } catch (err) {
      console.error("❌ Error occurred:", err);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Add Product
      </h2>

      <form onSubmit={handleAddProduct}>
        <div className="mb-4">
          <label htmlFor="id" className="block mb-1 font-medium text-gray-700">
            Product ID
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-black"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-1 font-medium text-gray-700"
          >
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-100 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {isError && (
        <p className="mt-4 text-red-600 text-center">
          ❌ Failed to add product
        </p>
      )}

      {showsuccess && (
        <p className="mt-4 text-green-600 text-center">
          ✅ Product added successfully!
        </p>
      )}
    </div>
  );
};

export default AddProduct;
