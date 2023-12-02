import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className='mx-auto max-w-7xl'>
        <div className="grid grid-cols-2 py-28 items-center gap-40">
            <div className="">
                <Image src='/image/Group 1000000895.svg' alt='About image' width='100' height='100' className='w-full' />
            </div>
            <div className="">
                <h2 className="font-Roboto font-semibold text-5xl text-navyBlue mb-10">About Us</h2>
                <h3 className="text-navyBlue font-semibold leading-[28px] mb-4 text-lg">Who are we? MailBlink is a team of talented individuals working together to make software people love.</h3>
                <p className="text-primaryBlack leading-[28px] mb-8">We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.</p>
                <Link href='/about' className='bg-navyBlue text-white px-4 py-2 rounded-full hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue hover:text-medium'>Read More</Link>
            </div>
        </div>
    </section>
  )
}

export default About