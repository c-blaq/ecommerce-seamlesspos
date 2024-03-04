import Image from "next/image";
import React from "react";

const Product = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="py-24 px-5 h-full flex flex-col lg:flex-row justify-between gap-5 items-center max-w-screen-2xl  mx-auto">
      <div className="min-h-full bg-textGray-100 flex-1 ">
        <Image
          src={""}
          alt="Jacket"
          width={1400}
          height={800}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex-1 max-w-lg mt-5 lg:mt-0">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">''</h2>
          <span className="text-textBlack text-lg">'sss'</span>
        </div>
        <div
          className="py-5"
          dangerouslySetInnerHTML={{ __html: <p>sss</p> }}
        />

        <div>
          <button className="bg-textBlack/[0.06] hover:bg-textBlack/[0.1] w-10 h-10 text-center mr-2">
            MD
          </button>
          <button className="bg-textBlack/[0.06] hover:bg-textBlack/[0.1] w-10 h-10 text-center mr-2">
            L
          </button>
          <button className="bg-textBlack/[0.06] hover:bg-textBlack/[0.1] w-10 h-10 text-center mr-2">
            XL
          </button>
        </div>

        <button className="block w-full h-10 text-sm mt-5 md:mt-8 bg-textBlack hover:bg-textBlack/80 text-white transition duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
