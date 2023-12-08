import Image from "next/image";

export const SmsHero = ()=>{
    return(
        <header className="flex flex-col justify-center items-center text-center bg-white font-poppins mt-10 px-4 md:flex-row md:bg-white-500">
        <div className="mb-4 md:text-left bg-white">
          <h3 className="text-ui_secondary1 text-sm md:text-md">
            WELCOME TO SMS MARKETING
          </h3>
          <h1 className="text-ui_primary text-4xl md:text-5xl font-extrabold mt-2 md:mt-5">
            MailBlink
          </h1>
          <p className="font-bold text-ui_primary mt-3 md:mt-10 text-sm md:text-lg">
            The backbone of your network <br />
            management system
          </p>
          <p className="mt-3 md:mt-7 text-sm md:text-lg">
            Network Management Information System
            <br />
            (NMIS) is the robust software platform
            <br /> underpinning Opmantek Performance and <br />
            Management solutions.
          </p>
          <div className="flex flex-col items-center md:flex-row mt-3">
          <button className="bg-ui_primary hover:bg-ui_button font-bold text-white py-2 px-4 mt-5 rounded-3xl mb-2 md:mt-6">
            Free Download
          </button>
          <button className="bg-ui_primary2 hover:bg-ui_button text-white font-bold py-2 px-6 rounded-3xl mt-5 md:ml-5">
            Book a Demo
          </button>
        </div>
        </div> 
        <div className="mb-4">
          <Image src="/assets/images/Creative.png" alt="heroimg" width={1000} height={500} className="w-[full] max-w-md mx-auto md:max-w-3xl "/>
        </div>
      </header>
    )
} 