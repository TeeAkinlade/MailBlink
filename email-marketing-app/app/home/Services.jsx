import { servicesData } from '@/constants';
import Link from 'next/link';

const Services = () => {
  return (
    <section className='bg-linear'>
        <div className="mx-auto max-w-7xl">
            <div className="py-20 px-8">
                <p className="text-3xl md:text-5xl font-semibold text-navyBlue font-Roboto text-center">Our Services</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-10">
                    {servicesData.map(({ id, icon, title, contents, href, linkText }) => (
                        <div className="py-8 bg-backGround shadow-xl p-8 rounded-lg" key={id}>
                           <span className='text-[#3CBA79]'>{icon}</span>
                            <h3 className="text-xl md:text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">{title}</h3>
                            <p className='text-primaryBlaxck mb-8 text-sm md:text-base'>{contents}</p>
                            <Link href={href} className='py-2.5 px-4 rounded-full hover:bg-white hover:text-navyBlue hover:font-semibold transition duration-300 text-sm md:text-base bg-navyBlue text-white'>{linkText}</Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services