"use client";

import Link from 'next/link';
// import Card from './(..product_id)/page'
import Card from './[product_id]/page'

const page = ({ card }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
    brand,
    warranty,
  } = card;
  return(
   <div>
     <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt={product_id}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title} </h2>
    <p> {description} </p>
    <div className="card-actions">
    <Link href={`/Card/${product_id}`}>
              <button className="btn btn-outline bg-transparent text-[#9538E2] rounded-2xl">
                View Details
              </button>
            </Link>
           
    </div>
  </div>
</div>
   </div>
  )
};

export default page;
