import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const Nav = () => {

    const navList = [
        { id: 1, name: 'Features'},
        { id: 2, name: 'Products'},
        { id: 3, name: 'Secure'},
        { id: 4, name: 'Automate'},
        { id: 5, name: 'Resources'},
        { id: 6, name: 'About'},
    ]


  return (
    <nav className="py-6">
        <div className="mx-auto max-w-6xl">
            <div className="flex justify-between items-center">
                <Link href='/' className="font-bold text-4xl text-[#17181A] font-Roboto">MailBlink</Link>
                <ul className="flex items-center space-x-6">
                    { navList.map(({id, name})=>(
                        <li className="flex items-center font-semibold text-sm text-[#17181A]" key={id}>{name} <span><FaAngleDown className="mt-1 ml-1" /></span></li>
                    ))}
                    <Link href='#' className="text-white bg-navyBlue rounded-[24px] py-2 px-6 font-medium text-sm hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue">Sign In</Link>
                    <Link href='#' className="text-navyBlue hover:rounded-[24px] bg-transparent hover:bg-navyBlue hover:text-white px-6 py-2 font-semibold hover:font-medium text-sm">Sign Up</Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav