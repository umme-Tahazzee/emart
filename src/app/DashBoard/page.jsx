"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TbCloverFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";



export default function DashBoard() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
   <>
  {/* Wrapper for the whole page */}
  <div className="relative">

    {/* Text Section - Pull this upward */}
    <div className="relative z-10 -mt-40 px-10 text-center text-white">
      <h2 className="text-2xl font-bold  ">DashBoard</h2>
      <p>
        Explore the latest gadgets that will take your experience to the next level.
        <br />
        From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="flex gap-4 justify-center mt-2">
                    <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
                      <FaShoppingCart />
                    </button>
                    <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
                      <TbCloverFilled />
                    </button>
                  </div>
    </div>

    {/* Add spacing to push cart down below the pulled-up section */}
    <div className="h-10" /> {/* acts as visual space for the negative margin */}
  </div>

  {/* Cart Section - Start fresh after space */}
  <div className="p-10">
    <h1 className="text-3xl font-bold mb-5">Cart</h1>

    {cartItems.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cartItems.map((item, idx) => (
          <div key={idx} className="p-5 bg-white rounded-xl shadow-md">
            <h2 className="mt-2 text-xl font-semibold">{item.product_title}</h2>
            <p className="text-sm text-slate-300">{item.description}</p>
            <p className="text-gray-600 font-bold mt-1">${item.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>
</>
  );
}
