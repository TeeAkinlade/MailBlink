"use client"

import { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export const ProductCard = (props) => {

    // ------------------ THIS IS ENTIRELY FOR STYLING---------------------------- //
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Detach the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array means this effect runs once after the initial render
    
      const top = {
        top: windowWidth > 768 ? props.top : 0,
      };

  return (
    <div className={` relative flex flex-col gap-5 p-6 bg-white rounded-lg lg:w-[33%] md:w-[40%] w-[95%] box-shadow hover:scale-105 transition-all`} style={top}>
      <div
        className={`rounded-full w-12 h-12 flex-center md:p-3 p-2`} style={{backgroundColor:`${props.bg}`}}>
        <img src={props.src} alt="" className=" w-6" />
      </div>
      <h3 className="text-lg font-bold text-ui_primary md:h-[2.8rem]">{props.title}</h3>
      <p className="text-base text-primaryBlack md:h-[8rem] ">{props.details}</p>
      <Link href="/">
      <div className="flex items-center cursor-pointer text-ui_secondary1 border-b-[1px] w-fit border-transparent hover:border-ui_secondary1 ">
        <span className='mr-2'>Learn More</span>
        <IoIosArrowRoundForward size={20} />
      </div>
      </Link>
    </div>
  );
};
