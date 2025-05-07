import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* Header Section */}
      <div className="min-h-[80vh] bg-[#9538E2] text-white rounded-b-3xl pb-20">
        {/* Navbar */}
        <div className="navbar px-6 pt-4">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-bold">eMart</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3 text-white font-semibold">
            <Link href='/'>Home</Link>
            <Link href="#">Statitics </Link>
            <Link href="#" >DashBoard</Link>
           


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
       
      </div>

      {/* Image Section */}
        
    </>
  );
};

export default Navbar;
