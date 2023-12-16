import Link from 'next/link'

const SignBtn = () => {
  return (
    <div className='block md:flex space-y-6 md:space-y-0 mx-auto md:flex-row space-x-3 md:space-x-6'>
        <Link href='#' className="text-white bg-navyBlue rounded-[24px] py-2 px-6 font-medium text-sm border border-navyBlue hover:text-navyBlue hover:bg-white hover:border hover:border-navyBlue duration-200">Sign In</Link>
        <Link href='#' className="signUp text-navyBlue bg-transparent font-semibold text-sm border border-navyBlue md:border-0">Sign Up</Link>
    </div>
  )
}

export default SignBtn