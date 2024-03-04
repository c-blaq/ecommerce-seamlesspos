"use client";

import Loader from "@/components/shared/Loader";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";

const Product = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/mock.json");

        if (!response.ok) {
          throw new Error("Failed to fetch mock data");
        }
        const data: Product[] = await response.json();

        setProduct(
          data.find((product) => product.id === parseInt(params.slug))
        );

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (params.slug) {
      fetchData();
    }
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="flex item-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-24 px-5 lg:h-screen  max-w-screen-2xl  mx-auto">
      <Link
        href="/"
        className="flex items-center gap-1 mb-5 hover:underline hover:text-inherit"
      >
        <FaChevronLeft />
        continue shopping
      </Link>

      {product ? (
        <div className="flex  h-full flex-col lg:flex-row justify-between gap-5 items-center">
          <div className="min-h-full w-full bg-textGray-100 flex-1 ">
            <Image
              src={""}
              alt="Jacket"
              width={1400}
              height={800}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex-1 mt-5 lg:mt-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{product?.name}</h2>
              <span className="text-textBlack text-lg">{product?.price}</span>
            </div>
            <div className="py-5">{product?.description}</div>

            {product?.additionalDetails && (
              <div>
                <p className="text-lg font-semibold mt-4">
                  Additional Details:
                </p>
                <ul className="mt-2 grid grid-cols-2 gap-3">
                  {Object.entries(product?.additionalDetails).map(
                    ([key, value]) => (
                      <li key={key}>
                        <span className="font-semibold">{key}:</span> {value}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            <div className="flex gap-4 mt-5 md:mt-8">
              <button className="text-sm h-10 bg-primary hover:bg-primary-dark text-white flex-1 rounded transition duration-300">
                Buy Now
              </button>
              <button className=" h-10 text-sm  bg-textBlack hover:bg-textBlack/80 text-white flex-1 rounded transition duration-300">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-lg font-medium">No product found!</p>
      )}
    </div>
  );
};

export default Product;