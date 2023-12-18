import Link from 'next/link'

export const EmailHero = () => {
  return (
    <main>
        <div className="flex items-center justify-center md:flex-row flex-col md:h-[41.75rem] md:p-0 p-6 pb-20 pt-10">
            <div className=" lg:ml-[9.38rem] md:-mr-[4rem] lg:w-[30%] md:w-[30%] md:text-xl w-full text-base text-ui_primary font-medium">
                <p className='mb-8 text-ui_secondary1 text-sm'>welcome to email marketing</p>
                <h2 className=' font-bold font-poppins md:text-[3.125rem] text-[2.2rem]'>MailBlink</h2>
                <p className=' my-6'>The backbone of your network management system.</p>
                <p className=' text-[#575757] font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, perferendis! Laborum ullam,us, blanditiis provident corporis odit praesentium sunt iste?.</p>
                <Link href='/campaigns'><button className=' bg-ui_primary text-white mt-9 md:px-8 md:py-4 px-6 py-3 rounded-full hover:bg-ui_secondary1'>Get Started</button></Link>
            </div>
            <div className='lg:w-[70%] md:w-[60%] md:block hidden'>
                <img src='/assets/images/Creative.png' alt='hero image' className=' object-cover'/>
            </div>
        </div>
    </main>
  )
}
