"use client"

import Link from "next/link";
import NavlinkList from "./NavlinkList";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [open, setOpen] = useState(false);

  return (
    <nav className="px-8 md:px-0 py-6">
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between items-center">
                <Link href='/' className="font-bold text-2xl md:text-4xl text-[#17181A] font-Roboto">MailBlink</Link>
                <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                    <RxHamburgerMenu />
                </div>
                <div className="md:flex hidden items-center space-x-6">
                    <NavlinkList />
                    <Link href='#' className="text-white bg-navyBlue rounded-[24px] py-2 px-6 font-medium text-sm hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue duration-200">Sign In</Link>
                    <Link href='#' className="signUp text-navyBlue hover:rounded-[24px] bg-transparent hover:bg-navyBlue hover:text-white px-6 py-2 font-semibold hover:font-medium text-sm duration-200">Sign Up</Link>
                </div>
            </div>
            {/* Mobile nav */}
            {open &&(
                <div className="md:hidden bg-tertiary fixed w-full top-0 bottom-0 py-16
                duration-500 left-0 z-50">
                    <FaRegTimesCircle size={35} className="absolute left-10 top-5" onClick={() => setOpen(!open)} />
                    <NavlinkList />
                </div>
            )}
        </div>
    </nav>
  )
}

export default Nav