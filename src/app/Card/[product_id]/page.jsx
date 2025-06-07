"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BsCartFill } from "react-icons/bs";
import { TbCloverFilled } from "react-icons/tb";
import { toast } from "react-toastify";


export default function ProductDetails() {
  const params = useParams();
  const id = parseInt(params.product_id);
  const [product, setProduct] = useState(null);

  const handleAddToCart = () => {
    if (product.availability) {
      // Save to localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      toast.success("Successfully added to cart!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Navigate to dashboard
      window.location.href = "/DashBoard";
    } else {
      toast.error("Failed to add. Product is out of stock!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleAddToWishList = () => {
    if (product.availability) {
      toast.success("Successfully added to WishList!", {
        position: "top-right",
        autoClose: 3000,
      });

    } else {
      toast.error("Failed to add WishList. Product is out of stock!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const loadProduct = async () => {
      const res = await fetch("/data.JSON");
      const data = await res.json();
      const found = data.find((product) => parseInt(product.product_id) === id);
      setProduct(found);
    };

    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="p-5 text-center max-w-4xl -mt-96 px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Product Details</h1>
          <p className="text-slate-200 mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. <br />
            From smart devices to the coolest accessories, we have it all!
          </p>
        </div>

        {/* Product Card */}
        <div className="flex justify-center">
          <div
            className="bg-white p-6 rounded-3xl shadow-xl
     w-full max-w-2xl flex flex-col md:flex-row items-center gap-6"
          >
            {/* Image */}
            <Image
              src={product.product_image}
              width={350}
              height={567}
              alt="Gadget Banner"
              className="rounded-2xl object-cover"
            />

            {/* Info */}
            <div className="text-left space-y-3 ">
              <h1 className="text-2xl font-bold">{product.product_title}</h1>

              <p className="text-green-600 font-semibold text-lg">
                ${product.price}
              </p>

              <span className="badge badge-success px-3 py-1 rounded-full text-white">
                {product.availability ? "In Stock" : "Out of Stock"}
              </span>

              <p className="text-slate-600 text-sm">{product.description}</p>

              {/* Specification */}
              <div>
                <p className="font-bold ">Specification:</p>
                <ul className="list-decimal text-sm list-inside text-slate-500 font-sans">
                  {product.specification.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="rating rating-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label={`${star} star`}
                      checked={Math.floor(product.rating) === star}
                      readOnly
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {product.rating}
                </span>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 justify-items ">
                <button
                  onClick={handleAddToCart}
                  className={`btn px-6 mt-4 rounded-full text-white 
                   ${product.availability
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!product.availability}
                >
                  {product.availability ? "Add To Cart" : "Out of Stock"}
                </button>
                <button
                  onClick={() => handleAddToWishList()}
                  className="btn mt-4 bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
                  <TbCloverFilled />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
