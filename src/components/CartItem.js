import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {
  deleteItem,
  resetCart,
} from "../redux/shoppingSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const productData = useSelector((state) => state.shopping.productData);
  const dispatch = useDispatch();
  return (
    <div className="xl:w-2/3 px-4 xl:ox-0  w-full xl:pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="xl:w-32 w-32 xl:h-32 h-20 object-cover"
                src={item.image}
                alt="productImage"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <h2 className="w-52">{item.price}</h2>
            
            <p className="w-14 font-semibold">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      {productData.length > 0 ? (
        <button
          onClick={() =>
            dispatch(resetCart()) & toast.error("Your cart is empty")
          }
          className="bg-red-500 flex  text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
        >
          Reset Cart
        </button>
      ) : null}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
