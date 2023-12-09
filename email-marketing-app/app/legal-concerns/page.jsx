import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa"


const Legal = () => {
  return (
    <>
      <div className='pt-[7rem] bg-[#fff] h-[100vh]'>
        <div className='lg:flex gap-[7rem] items-center'>
          <div className='lg:ms-[150px]'>
            <h1 className='text-[#1F284F] font-poppins text-[50px] font-[700] leading-[60px]'>legal terms</h1>
            <h3 className='mt-[24px] text-[#1F284F] font-poppins text-[20px] font-[500] leading-[32px]'>Opmantek prides itself on providing users <br /> access to all their data.</h3>
            <p className='mt-[16px] text-[#575757] text-[20px] font-poppins font-[400] leading-[32px]'>This begins with our products giving you all <br /> the data on your network, but it extends to <br /> any of your personal information. We pride <br /> ourself on ensuring this is safe.</p><br />
            <Link href='#'
              className='mt-[24px] w-[180px] text-[16px] text-[#FFF] font-[600] leading-[24px] font-poppins'
              style={{
                background: `rgba(0, 112, 240, 0.90)`,
                border: `1px solid rgba(0, 112, 240, 0.90))`,
                borderRadius: "30px",
                padding: "12px 24px",
              }}
            >
              Download all PDF
            </Link>
          </div>
          <div className='lg:mr-[118px]'>
            <Image src='/assets/images/image 78.png' width='580' height='400' />
          </div>
        </div>
      </div>
      <div className='mt-[5rem] mb-5'>
        <h1 className='text-[#1f2129] font-poppins text-[32px] font-[700] leading-[40px] text-center'>Need more information? Consult our Terms of <br /> Service and other legal agreements.</h1>
        <div className='flex gap-[3%] ms-[5rem] mt-[4rem]'>
          <div className='w-[370px] h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] px-[25px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Privacy in Statement</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>How MailBlink handles your personal <br /> information when you use our services</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/legal-concerns/privacy-policy'>Learn more</Link> <FaArrowRight /></p>
          </div>
          <div className='w-[370px] h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] px-[25px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Cookie Policy</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>How MailBlink handles your personal <br /> information when you use our services</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/'>Learn more</Link> <FaArrowRight /></p>
          </div>
          <div className='w-[370px] h-[280px] rounded-[22px] border-[1px] border-solid border-[#DFDFDF] bg-[#fff] py-[5px] px-[25px]'>
            <h1 className='text-[#1B1C31] text-[27px] font-[800] leading-[33px] tracking-tighter-[-0.72px] mt-[30px]'>Term of Use</h1>
            <p className='text-[#64607D] text-[16px] font-[500] leading-[30px] tracking-tighter-[-0.32px] mt-[46px]'>What you agree to in order to use <br /> MailBlink</p>
            <p className='mt-[3rem] text-[#01966B] text-[16px] font-[600] leading-[16px] flex gap-2 items-center'><Link href='/'>Learn more</Link> <FaArrowRight /></p>
          </div>
        </div>
      </div>
    </>
  )
};

export default Legal;
