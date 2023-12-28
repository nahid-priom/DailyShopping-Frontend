import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.shopping.productData);
  const [totalAmount, setTotlaAmount] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotlaAmount(price.toFixed(2));
  }, [productData]);
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">Cart Totals</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal {""}
            <span className="font-titleFont font-bold text-lg">$ {totalAmount}</span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping <span>Jhenaidah, Dhaka, Bangladesh</span>
          </p>
        </div>
        <p>
          Total <span className="text-xl font-bold">$ {totalAmount}</span>{" "}
        </p>
        <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
