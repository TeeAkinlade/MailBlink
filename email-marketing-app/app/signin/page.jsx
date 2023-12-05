import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[720px] h-[100vh] ps-[247px] pr-[109px] pt-[160px]'
                    style={{
                        background: `linear-gradient(141deg, #F5F0FF 0%, #EFF6FE 50.36%, #EDFAF5 100%)`
                    }}
                >
                    <h1 className='text-[#17181A] text-[48px] font-[700] leading-[64px] font-Poppins'>MailBlink</h1>
                    <h3 className='text-[#17181A] text-[48px] font-[700] leading-[64px] font-Poppins'>Hi <br /> Welcome back <br /> to MailBlink</h3>
                    <Image src='/assets/images/Group 2936.svg' className='flex justify-end ms-[6rem]' width='172' height='23' />
                </div>
                <div className='w-[720px] h-[100vh] bg-[#fff] ps-[109px] pt-[160px]'>
                    <h3 className='text-[#17181A] text-[24px] font-[600] leading-[32px] font-Poppins ms-[9rem]'>Login</h3>
                    <form className='mt-[16px]'>
                        <label className='text-[#515458] text-[12px] font-[500] font-Poppins mt-[22px]'>user name</label><br />
                        <input type='text' placeholder='enter user name'
                            className='text-[#575757] bg-[#fff] border-[#B7BFC7] border-[1px] border-solid rounded-[8px] text-[16px] font-[400] leading-[24px] font-Poppins mt-[4px] outline-none'
                            style={{ padding: '12px 0px 12px 12px', width: '364px', height: '48px' }}
                        /><br /><br />
                        <label className='text-[#515458] text-[12px] font-[500] font-Poppins'>password</label> <br />
                        <input type='password' placeholder='enter password'
                            className='text-[#575757] bg-[#fff] border-[#B7BFC7] border-[1px] border-solid rounded-[8px] text-[16px] font-[400] leading-[24px] font-Poppins mt-[4px] outline-none'
                            style={{ padding: '12px 0px 12px 12px', width: '364px', height: '48px' }}
                        /><br/>
                        <p className='mt-[5px]'><Link href='#' className='text-[#1F284F] text-[14px] font-[600] leading-[18px] font-Poppins'>Forgot password?</Link></p><br />
                        <button type='submit'
                            style={{ background: `rgba(0, 112, 240, 0.90)`, border: `1px solid rgba(0, 112, 240, 0.90))`, borderRadius: '30px', padding: '12px 24px', width: '364px' }}
                            className='text-[16px] font-[600] leading-[24px] flex justify-center items-center font-Poppins text-[#fff]'
                        >
                            Sign up
                        </button><br />
                        <p className='text-[#575757] text-center text-[14px] font-Poppins font-[400] leading-[18px] ms-[-12rem]'>Don't have an account? <Link href='#' className='text-[#1F284F] font-[600]'>Create an account</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page