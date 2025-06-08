import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../app/service/dummydata"; // Fixed typo: Products

const AllProduct = () => {
  const { data, error, isLoading } = useGetAllProductQuery(); // Fixed typo

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center py-10">
        Error: {error.message}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition duration-300 flex flex-col transform  hover:scale-105"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.title}
            </h3>
            <div className="mt-auto">
              <p className="text-sm text-gray-600 mb-2">
                {product.description}
              </p>
              <p className="text-blue-600 font-medium">
                Price: ${product.price}
              </p>
            </div>
            <div className="mt-auto">
              <Link to={`/products/${product.id}`}>
                <button className="mt-auto">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
