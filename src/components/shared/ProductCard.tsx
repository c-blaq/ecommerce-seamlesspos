// "use client";

import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="bg-gray-400 h-72"></div>

      <div className="px-6 py-4">
        <div>
          <h3 className="font-bold  mb-2">Product Name</h3>
          <p className="text-gray-700 text-base mt-2">Price: $99.99</p>
        </div>

        <button className="bg-textBlack hover:bg-textBlack/[0.06] hover:text-textBlack block mt-4 ml-auto text-white text-sm py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
