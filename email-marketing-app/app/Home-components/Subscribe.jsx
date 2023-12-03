import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-navyBlue'>
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-0 py-16 gap-20">
                <div className="text-white">
                    <p className="uppercase text-sm">Why Choose Us</p>
                    <h3 className="font-Roboto text-3xl md:text-5xl font-semibold py-8 leading-tight ">Partiality on or continue in the particular principles</h3>
                    <p className="text-sm leading-[2]">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
                <div className="flex flex-col">
                    <input type="text" placeholder='Email Address' className='placeholder:text-[#BBB5E0] placeholder:text-sm md:placeholder:text-lg w-full rounded-lg p-2 md:p-4 outline-none' />
                    <input type="text" placeholder='Password' className='placeholder:text-[#BBB5E0] placeholder:text-sm md:placeholder:text-lg w-full my-4 rounded-lg p-2 md:p-4 outline-none'/>
                    <button className='text-white bg-forestGreen w-full rounded-lg p-2 md:p-4 uppercase text-sm md:text-lg font-semibold'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe