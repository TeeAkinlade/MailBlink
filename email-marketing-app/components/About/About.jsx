import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from 'next/image'

const About = () => {
  return (
    <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-8 md:px-0 md:pl-24 relative">
              <div className="pt-10 md:pt-12 pb-6 md:pb-48">
                  <p className="text-primaryBlack2 text-3xl sm:text-4xl md:text-5xl font-semibold font-Roboto leading-tight">About Us <span className="text-forestGreen">Email Marketing</span> Made Easy.</p>
                  <div className="my-6 md:my-8">
                    <p className="text-[#565656] text-sm md:text-lg">Who are we? MailBlink is a team of talented individuals working together to make software people love.</p>
                    <p className="text-[#565656] text-sm md:text-lg">We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.</p>
                    <button className="bg-navyBlue text-white text-sm md:text-lg px-3 md:px-5 py-2 ml-5 border border-navyBlue hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white transition duration-150">Let’s Talk</button>
                    <button className="bg-navyBlue text-white text-sm md:text-lg px-3 md:px-5 py-2 ml-5 border border-navyBlue hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white transition duration-150">Let’s Talk</button>
                    {/* <ul className="my-6">
                      <li className="flex items-center text-sm md:text-base"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Get Overview at a glance</span></li>
                      <li className="flex items-center text-sm md:text-base my-2"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Deposit funds easily, security</span></li>
                      <li className="flex items-center text-sm md:text-base"><RiVerifiedBadgeFill className="text-navyBlue" size={24} /> <span className="ml-4 text-[#565656]">Get Live Support</span></li>
                    </ul> */}
                  </div>
                  <div className="flex mt-8 md:mt-4 pb-10">
                    <input type="text" placeholder="Enter email" className="px-3 md:px-5 py-2 focus:border-0 outline-none shadow-xl cursor-pointer" />
                    <button className="bg-navyBlue text-white text-sm md:text-lg px-3 md:px-5 py-2 ml-5 border border-navyBlue hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white transition duration-150">Let’s Talk</button>
                  </div>
                </div>
                <div className="">
                  <Image src='/image/Rectangle.svg' alt="left-half-circle" width="24" height="24" className=" absolute left-0 top-0" />
                  <Image src='/image/Rectangle (1).svg' alt="left-half-cirle 2" width="64" height="44" className="hidden md:block absolute left-0 bottom-0" />
                  <Image src='/image/Rectangle (2).svg' alt="left-half-cirle 2" width="20" height="20" className="absolute right-0 bottom-4 md:bottom-10" />
                </div>
            </div>
            <div className="pr-4">
              <Image src='/image/Group 1000000796.svg' alt="hero-dashboard-image" width='150' height='150' className="w-full object-cover" />
            </div>
        </div>
    </section>
  )
}

export default About;