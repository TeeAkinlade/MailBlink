import Link from "next/link";
import NavlinkList from "./NavlinkList";

const Nav = () => {

  return (
    <nav className="py-6">
        <div className="mx-auto max-w-7xl">
            <div className="flex justify-between items-center">
                <Link href='/' className="font-bold text-4xl text-[#17181A] font-Roboto">MailBlink</Link>
                <div className="flex items-center space-x-6">
                    <NavlinkList />
                    <Link href='#' className="text-white bg-navyBlue rounded-[24px] py-2 px-6 font-medium text-sm hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue duration-200">Sign In</Link>
                    <Link href='#' className="signUp text-navyBlue hover:rounded-[24px] bg-transparent hover:bg-navyBlue hover:text-white px-6 py-2 font-semibold hover:font-medium text-sm duration-200">Sign Up</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav