"use client"

import { useState } from "react";
import Link  from "next/link";
import { NavListData } from "./NavlinkData";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const NavlinkList = () => {
  const [getLinks, setGetLinks] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col md:flex-row items-center">
      {NavListData.map((link) => (
          <div key={link.id}>
            <div className="px-3 flex text-left md:cursor-pointer group">
              <h1
                className="py-5 md:py-7 flex justify-between items-center font-semibold text-sm text-[#17181A] md:pr-0 pr-5 group"
                onClick={() => setIsActive(prev => !prev) }
              >
                {link.name}
                <span><FaAngleDown className="mt-1 ml-1" /></span>
                {/* <span className="text-xl md:hidden inline">
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span> */}
              </h1>
              {link.submenu && (
                <div>
                  <div className="ml-[-20px] absolute top-14 z-50 hidden group-hover:md:block hover:md:block">
                    <div className="py-3">
                      <div
                        className="w-4 h-4 left-3 absolute 
                      mt-1 bg-white rotate-45"
                      ></div>
                    </div>
                    <div className="bg-white p-5 w-[200px] shadow-xl">
                      {link.sublink.map((links) => (
                        <ul className="" key={links.name}>
                            <li className="text-sm text-gray-600 my-2.5 hover:bg-linear">
                              <Link
                                href={links.link}
                                className="hover:text-primary"
                              >
                                {links.name}
                              </Link>
                            </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                  
                </div>
              )}
              
            </div>
          </div>
      ))}
    </div>
  )
}

export default NavlinkList