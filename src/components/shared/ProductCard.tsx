import { Product } from "@/types/product";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";

interface IProduct {
  product: Product;
}

const ProductCard = ({ product }: IProduct) => {
  return (
    <div className="max-w-sm min-w-[200px] rounded overflow-hidden shadow-lg flex-1 shrink-0">
      <div className="bg-gray-400 h-72"></div>

      <div className="px-6 py-4">
        <div>
          <h3 className="font-bold  mb-2">{product.name}</h3>
          <p className="text-gray-700 text-base mt-2">
            Price: {formatCurrency(product.price)}
          </p>
        </div>

        <button className="bg-textBlack hover:bg-textBlack/[0.06] hover:text-textBlack block mt-4 ml-auto text-white text-sm py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
