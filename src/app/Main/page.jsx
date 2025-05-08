// 'use client';
// import React, { useEffect, useState } from 'react'
// import Card from '../Card/page'

// const  page = ({data}) => {

  
//   const [cards, setCards] = useState([])
//   useEffect(() => {
//   fetch('/data.JSON')
//     .then(res => res.json()) // <-- call json()
//     .then(data => {
//     setCards(data)
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }, []);
 
//    return (
//     <div className='m-10 p-5 space-y-5 '>
//        <div>
//           <h1 className="text-2xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
//        </div>
//        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
//        {
//          cards.map((card, idx)=> <Card card={card} key={idx}  /> )
//        }
//        </div>
//     </div>
//   )
// }

// export default page


'use client';
import React, { useEffect, useState } from 'react'
import Card from '../Card/page'


const Page = ({ data }) => {
  return (
    <div className="m-10 p-5 space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-center">Explore Cutting-Edge Gadgets</h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((card, idx) => (
          <Card card={card} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Page;
