"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaPhone } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { formatCurrency } from "@/utils/formatCurrency";
import Loader from "@/components/shared/Loader";
import ImageSlide from "@/components/product/ImageSlide";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Modal from "@/components/product/Modal";
import { useAuth } from "@/context/AuthProvider";

const Product = ({ params }: { params: { slug: string } }) => {
  const { isLoggedIn, handleAddToCart } = useAuth();
  const router = useRouter();

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/mock.json");

        if (!response.ok) {
          toast.error("Failed to fetch mock data");
        }
        const data: Product[] = await response.json();

        setProduct(
          data.find((product) => product.id === parseInt(params.slug))
        );

        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong! Try again");
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

  const handleBuyProduct = () => {
    // check if user is not logged
    if (!isLoggedIn) {
      return setOpenModal(true);
    }

    toast.success("Thank you for your purchase, you will be redirected soon", {
      autoClose: 3000,
    });

    setTimeout(() => router.push("/"), 3000);
  };

  return (
    <div className="py-24 px-5 lg:min-h-screen  max-w-screen-2xl  mx-auto">
      <Link
        href="/"
        className="flex items-center gap-1 w-fit text-sm mb-5 hover:underline hover:text-inherit"
      >
        <FaChevronLeft />
        continue shopping
      </Link>

      {product ? (
        <>
          <div className="flex -mx-5 lg:mx-0 h-full flex-col lg:flex-row justify-between gap-5 items-center">
            <div className="h-full w-full lg:w-1/2 ">
              <ImageSlide
                images={product.additionalDetails?.images}
                altText={product.name}
              />
            </div>

            <div className="w-full lg:w-1/2 mt-5 lg:mt-0 px-5 lg:px-0">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{product?.name}</h2>
                <span className="text-textBlack text-lg">
                  {formatCurrency(product?.price)}
                </span>
              </div>
              <div className="py-5 text-sm lg:text-base leading-loose">
                {product?.description}
              </div>

              {product?.additionalDetails && (
                <div>
                  <h3 className="lg:text-lg font-semibold mt-4">
                    Additional Details:
                  </h3>
                  <ul className="mt-2 grid sm:grid-cols-2 gap-3">
                    {Object.entries(product?.additionalDetails).map(
                      ([key, value]) =>
                        key !== "images" && (
                          <li key={key}>
                            <span className="font-semibold text-sm lg:text-base">
                              {key}:
                            </span>{" "}
                            {value}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 mt-8 md:mt-10">
                <button
                  onClick={handleBuyProduct}
                  className="text-sm h-10 bg-primary hover:bg-primary-dark text-white flex-1 rounded transition duration-300"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className=" h-10 text-sm  bg-textBlack hover:bg-textBlack/80 text-white flex-1 rounded transition duration-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Extra Informations:</h2>
            <div className="mt-4 flex items-center gap-2">
              <FaPhone className="text-xl" />
              <p className="font-medium text-sm md:text-base">
                Call{" "}
                <a
                  href="tel:+2349059921680"
                  className="text-primary hover:underline"
                >
                  09059921680
                </a>{" "}
                to place your order.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <MdOutlineProductionQuantityLimits className="text-xl" />
              <p className="font-medium text-sm md:text-base">
                Product Availability: <span>In stock</span>
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <IoMdInformationCircle className="text-xl" />
              <p className="font-medium text-sm md:text-base">
                Delivery Information:{" "}
                <span>Free delivery within 3-5 business days</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-lg font-medium">No product found!</p>
      )}

      {/* display when user in not logged in */}
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default Product;
