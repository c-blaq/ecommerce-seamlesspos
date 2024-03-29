"use client";

import { useEffect, useState } from "react";
import { FaRegFaceSmileWink, FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { toast } from "react-toastify";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types/product";
import Loader from "@/components/shared/Loader";
import Faqs from "@/components/home/Faq";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/mock.json");

        if (!response.ok) {
          toast.error("Failed to fetch mock data");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong! Try again");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />

      <section className="bg-primary/[0.06] py-10 md:py-20">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 sm:mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-4xl text-primary mb-4">
                <FaTruckFast />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Get your products delivered quickly to your doorstep, so you can
                enjoy them without delay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-4xl text-primary mb-4">
                <RiSecurePaymentFill />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Shop with confidence knowing that your payment information is
                secure and protected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-4xl text-primary mb-4">
                <FaRegFaceSmileWink />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-600">
                Choose from a wide range of electronic products, ensuring you
                find the perfect fit for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto py-10 md:py-20 px-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 sm:mb-8">
              Featured Products
            </h2>
            <div className="flex gap-5 overflow-x-scroll no-scrollbar">
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="py-10 lg:py-20">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-5 sm:mb-8">
          FAQS
        </h2>
        <Faqs />
      </div>
    </>
  );
}
