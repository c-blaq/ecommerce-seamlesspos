import AboutUS from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProductCard from "@/components/shared/ProductCard";
import { FaRegFaceSmileWink, FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-primary/[0.06] py-10 md:py-20">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-2xl md:text-4xl text-primary mb-4">
                <FaTruckFast />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered quickly to your doorstep, so you can
                enjoy them without delay.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-2xl md:text-4xl text-primary mb-4">
                <RiSecurePaymentFill />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Shop with confidence knowing that your payment information is
                secure and protected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="text-2xl md:text-4xl text-primary mb-4">
                <FaRegFaceSmileWink />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from a wide range of electronic products, ensuring you
                find the perfect fit for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h2>Featured</h2>
        <div>
          <ProductCard />
        </div>
      </div>
      {/* <AboutUS /> */}
    </>
  );
}
