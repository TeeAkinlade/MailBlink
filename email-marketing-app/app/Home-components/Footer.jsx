import Link from 'next/link'
import Image from 'next/image'
import FooterLink from './FooterLink'

const Footer = () => {
  return (
    <div className='mx-auto max-w-7xl'>
        <div className="mt-16 mb-8">
            <div className="pt-16 pb-8">
                <div className="grid grid-cols-5 gap-20">
                  <div className="col-span-2">
                    <p className="text-3xl font-Roboto font-semibold mb-8 text-primaryBlack2">MailBlink.io</p>
                    <p className="mb-4 text-primaryBlack font-medium text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo at justo posuere luctus. Maecenas id mauris sit.</p>
                    <div className="">
                      <div className="">
                        <Image src="/image/certification.svg" alt="certification" width="100" height="100" className='w-1/2' />
                      </div>
                      <div className="flex items-center space-x-6 mt-10">
                        <Link href="#">
                        <Image src="/image/facebook.svg" alt="certification" width="40" height="40" className='hover:translate-y-4 hover:duration-300 hover:ease-in-out' />
                        </Link>
                        <Link href="#">
                        <Image src="/image/Twitter.svg" alt="certification" width="40" height="40" className='hover:translate-y-4 hover:duration-300 hover:ease-in-out' />
                        </Link>
                        <Link href="#">
                        <Image src="/image/LinkedIn.svg" alt="certification" width="40" height="40" className='hover:translate-y-4 hover:duration-300 hover:ease-in-out' />
                        </Link>
                        <Link href="#">
                        <Image src="/image/Instagram.svg" alt="certification" width="40" height="40" className='hover:translate-y-4 hover:duration-300 hover:ease-in-out' />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <FooterLink />
                  </div>
                </div>
                <hr  className='my-10'/>
                <div className="grid grid-cols-5 gap-20">
                  <div className="col-span-2">
                    <p className="text-lg font-Roboto font-semibold mb-8 text-primaryBlack2">Reach us</p>
                    <div className="">
                      <div className="flex items-center space-x-3">
                        <Image src="/image/email-icon.svg" alt="certification" width="25" height="25"  />
                        <p className="font-semibold text-primaryBlack text-sm">Support: <span className="font-normal">hello@landify.co</span></p>
                      </div>
                      <div className="flex items-center space-x-3 py-4">
                        <Image src="/image/Mobile.svg" alt="certification" width="20" height="20"  />
                        <p className="font-semibold text-primaryBlack text-sm">General: <span className="font-normal">+91 98765 43210</span></p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Image src="/image/Location.svg" alt="certification" width="25" height="25"  />
                        <p className="font-semibold text-primaryBlack text-sm max-w-[200px]">Lagos Office: <span className="font-normal">772 Ikeja, Ave
                        Lagos, NIG 91789</span></p>
                      </div>
                      <div className="flex items-center space-x-3 py-4">
                        <Image src="/image/Location.svg" alt="certification" width="25" height="25"  />
                        <p className="font-semibold text-primaryBlack text-sm max-w-[200px]">Enugu Office: <span className="font-normal">772 Enugu Ave, NairaTriangle, NIG 91789</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <FooterLink />
                  </div>
                </div>
                <hr  className='my-10'/>
                <div className="flex justify-between items-center">
                  <Link href='#' className="text-primaryBlack hover:text-navyBlue text-sm">MailBlink 2023. All rights reserved</Link>
                  <Link href='#' className="text-primaryBlack hover:text-navyBlue text-sm">Terms & Privacy</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer