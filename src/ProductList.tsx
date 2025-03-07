import React, { useState } from "react";
import './ProductListing.css';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductList: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: "1", name: "Clothes", price: 100.0, description: "The best laptopm ever that can be used in any business office " },
    { id: "2", name: "Food", price: 200.0, description: "the best cheaper home television that can be used even in the cinema hall" },
    { id: "3", name: "Car", price: 300.0, description: "the best lazer printer device to be used in even large printing house" },
    { id: "4", name: "House", price: 150.0, description: "The best laptopm ever that can be used in any business office " },
    { id: "5", name: "Motorcycle", price: 184.0, description: "buy the best quality speaker device and iluminate your party in echo noice" },
    { id: "6", name: "Bitch", price: 12000.0, description: "the best bitch to be used in taking the events videos and even image at the same time" },
  ]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((Product) =>
    Product.name.includes(searchTerm)
  );

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Product Listing Application</h2>
      <input
        type="text"
        placeholder="Search by name"
        className="border p-2 w-full mb-4"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} className="border p-3 mb-2">
            <div>
              <span className="font-bold">{product.name}</span> - ${product.price.toFixed(2)}
            </div>
            <div>{product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;