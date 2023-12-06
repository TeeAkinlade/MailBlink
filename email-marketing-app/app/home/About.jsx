import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className='bg-backGround'>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-0 py-16 md:py-28 items-center md:gap-40">
          <h2 className="font-Roboto font-semibold text-3xl text-center text-navyBlue mb-10 md:hidden">About Us</h2>
            <div className="">
                <Image src='/image/Group 1000000895.svg' alt='About image' width='100' height='100' className='w-full' />
            </div>
            <div className="mt-10 md:mt-0">
                <h2 className="font-Roboto font-semibold text-5xl text-navyBlue mb-10 hidden md:block">About Us</h2>
                <h3 className="text-navyBlue font-semibold leading-[28px] mb-4 text-lg">Who are we? MailBlink is a team of talented individuals working together to make software people love.</h3>
                <p className="text-primaryBlack leading-[28px] mb-8">We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.</p>
                <Link href='/about' className='bg-navyBlue text-white px-4 py-2 rounded-full border border-navyBlue hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue hover:text-medium transition duration-150 ease-in-out'>Read More</Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About