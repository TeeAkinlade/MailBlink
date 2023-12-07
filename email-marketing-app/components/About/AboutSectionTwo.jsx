import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from 'next/image'

const AboutSectionTwo = () => {
  return (
    <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-8 md:px-0 md:pl-24 relative">
              <div className="pt-10 md:pt-12 pb-6 md:pb-48">
                  <p className="text-primaryBlack2 text-3xl sm:text-4xl md:text-5xl font-semibold font-Roboto leading-tight">About Us</p>
                  <div className="my-6 md:my-8">
                    <p className="text-[#565656] text-sm md:text-lg">Who are we? MailBlink is a team of talented individuals working together to make software people love.</p>
                    <p className="text-[#565656] text-sm md:text-lg">We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.</p>
                  </div>
                  <div className="flex mt-8 md:mt-4 pb-10">
                    <button className="bg-navyBlue text-white text-sm md:text-lg px-3 md:px-5 py-2 ml-5 border border-navyBlue hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white transition duration-150">Contact Us</button>
                    <button className="bg-navyBlue text-white text-sm md:text-lg px-3 md:px-5 py-2 ml-5 border border-navyBlue hover:text-navyBlue hover:font-semibold hover:border hover:border-navyBlue hover:bg-white transition duration-150">Book a Demo</button>
                  </div>
                </div>
            </div>
            <div className="pr-4">
              <Image src='/image/About-hero.svg' alt="About-hero" width='150' height='150' className="w-full object-cover" />
            </div>
        </div>
    </section>
  )
}

export default AboutSectionTwo;