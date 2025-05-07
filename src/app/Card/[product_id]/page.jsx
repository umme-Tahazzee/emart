'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ProductDetails() {
  const params = useParams();
  const id = parseInt(params.product_id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const res = await fetch('/data.JSON');
      const data = await res.json();
      const found = data.find((product) => parseInt(product.product_id) === id);
      setProduct(found);
    };

    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <div className="flex justify-center -mt-60 px-4">
             <div className="bg-white p-4 rounded-3xl shadow-xl max-w-3xl">
               <Image
                 src={product.product_image}
                 width={600}
                 height={300}
                 alt="Gadget Banner"
                 className="rounded-2xl"
               />
             </div>
           </div>
      
    </div>
  );
}
