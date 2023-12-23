import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          {" "}
          The company launched amazon.com Auctions, a web auction service, in
          March 1999. However, it failed to chip away at the large market share
          of the industry pioneer, eBay. Later, the company launched a
          fixed-price marketplace business, zShops, in September 1999, and the
          now defunct partnership with Sotheby's, called Sothebys.amazon.com
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductCard/>
      </div>
    </div>
  );
};

export default Products;
