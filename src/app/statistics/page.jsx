'use client'
import React, { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='relative'>

        <div className="relative z-10 -mt-30 px-10 text-center text-white space-y-2"> 
            <h1 className="font-bold text-2xl">Statistics</h1>
            <p>Explore the latest gadgets that will take your experience to the next level.<br/> 
            From smart devices to the coolest accessories, we have it all!</p>
        </div>
    <div className="-h-10" /> {/* acts as visual space for the negative margin */}

       <div className='p-10' style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={products}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rating" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    </div>


  );
};

export default Page;
