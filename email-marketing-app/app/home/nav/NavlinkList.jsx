"use client"

import React, { useState } from "react";
import Link  from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { NavListData } from "@/constants";

const NavlinkList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [icon, setIcon] = useState(null);
  const [sublinks, setsublinks] = useState(true);
  const [visible, setVisible] = useState(false)

  const toggle = (id) =>{
    setSelectedItem(id);
    setIcon(id)
    setsublinks(id)
  }

  const show = () => {
    setVisible(prev => !prev)
  }

  return (
    <main className="flex flex-col md:flex-row item-start md:items-center">
      {NavListData.map((link) => (
          <div key={link.id} onClick={() => toggle(link.id)}>
            <div className="px-3 md:flex text-center md:cursor-pointer group">
              <h1 onClick={show}
                className={`${selectedItem === link.id ? "text-lightBlue" : "text-primaryBlack2"} ${visible ? "text-lightBlue" : "text-primaryBlack2"} px-3 py-5 md:py-2 flex justify-between items-center font-semibold text-sm md:pr-0 pr-5 group cursor-pointer hover:bg-gray-200 rounded`}
              >
                {link.name}
                <span>
                  <FaAngleDown className={`${icon === link.id ? "rotate-180 text-lightBlue" : "text-primaryBlack2 rotate-0"} ${visible ? "text-lightBlue" : "text-primaryBlack2 rotate-0"} duration-300 mx-1`} />
                </span>
              </h1>
                <div>
                { sublinks === link.id ? 
                  <div>
                      {link.submenu && (
                        <div>
                          <div className="md:ml-[-20px] md:absolute md:top-16 z-50">
                            <div className="hidden md:block py-3">
                              <div
                                className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                              ></div>
                            </div>
                            <div className="md:bg-white py-5 md:w-[400px] md:h-[300px] md:shadow-xl">
                              {link.sublink.map((links) => (
                                <ul className="" key={links.name}>
                                    <li className="text-base text-gray-600 my-2.5 py-2 hover:bg-lightBlue  hover:text-white hover:text-semibold text-center">
                                      <Link
                                        href={links.link}
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
                  :
                  <></>
                }
                </div>
            </div>
          </div>
      ))}
    </main>
  )
}

export default NavlinkList