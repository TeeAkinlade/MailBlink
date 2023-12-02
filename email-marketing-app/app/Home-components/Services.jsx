import Link from 'next/link'
import { IoMdMail } from "react-icons/io";
import { FaSms } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const Services = () => {
  return (
    <div className='bg-linear'>
        <div className="mx-auto max-w-7xl">
            <div className="py-20">
                <p className="text-5xl font-semibold text-navyBlue font-Roboto text-center">Our Services</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:gap-10">
                    <div className="py-8 bg-backGround shadow-xl p-8 rounded-lg">
                        <IoMdMail size={50} className='text-[#3CBA79]' />
                        <h3 className="text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">Email</h3>
                        <p className='text-primaryBlaxck mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.</p>
                        <Link href='#' className='py-2.5 px-4 rounded-full hover:translate-y-2 bg-navyBlue text-white'>Learn More</Link>
                    </div>
                    <div className="py-8 bg-backGround shadow-xl p-8 rounded-lg">
                        <FaSms size={50} className='text-[#3CBA79]' />
                        <h3 className="text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">SMS</h3>
                        <p className='text-primaryBlaxck mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.</p>
                        <Link href='#' className='py-2.5 px-4 rounded-full hover:translate-y-2 bg-navyBlue text-white'>Learn More</Link>
                    </div>
                    <div className="py-8 bg-backGround shadow-xl p-8 rounded-lg">
                        <FaWpforms size={50} className='text-[#3CBA79]' />
                        <h3 className="text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">Form</h3>
                        <p className='text-primaryBlaxck mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae optio natus officiis nesciunt eum repellendus commodi aliquam aperiam odit, iure illo ab esse molestias recusandae beatae ipsam, laudantium cum at.</p>
                        <Link href='#' className='py-2.5 px-4 rounded-full hover:translate-y-2 bg-navyBlue text-white'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services