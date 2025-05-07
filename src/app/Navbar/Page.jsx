import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      {/* Header Section */}
      <div className="min-h-[80vh] bg-[#9538E2] text-white rounded-b-3xl pb-20">
        {/* Navbar */}
        <div className="navbar px-6 pt-4">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-bold">Emart</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3 text-white font-semibold">
              <li><a className="hover:text-purple-300">Home</a></li>
              <li><a className="hover:text-purple-300">Statistics</a></li>
              <li><a className="hover:text-purple-300">Dashboard</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
              <FaShoppingCart />
            </button>
            <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
              <TbCloverFilled />
            </button>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center mt-16 space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-base md:text-lg text-white/90">
            Explore the latest gadgets that will take your experience to the next level.<br />
            From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn btn-lg bg-white text-[#9538E2] rounded-full px-8 hover:bg-transparent hover:text-white border-2 border-white transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center -mt-16 px-4">
        <div className="bg-white p-4 rounded-3xl shadow-xl max-w-3xl">
          <Image
            src="/assets/banner.jpg"
            width={600}
            height={300}
            alt="Gadget Banner"
            className="rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
