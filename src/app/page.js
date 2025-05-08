"use client"
import Main from './Main/page'
import HeroImg from '../app/HeroImg/page'
import { useEffect, useState } from 'react'
const page = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.JSON');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <HeroImg/>
       <Main data={data}/>    
    </div>
  )
}

export default page