import Image from "next/image";
// import Supportimg from "./Group 1000000830.png";

export default function Support() {
  return (

    <main className="mt-0 bg-blue-50 text-ui_primary w-full font-poppins md:b-10">
    <div className="mx-4  md:mx-10 md:max-w-screen-lg lg:max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-center items-center mb-[100px]">
        <div className="md:w-1/2 md:mr-4 md:ml-[200px]">
          <h2 className="text-ui_primary mt-10 font-semibold text-xl md:text-4xl font-bold font-poppins">
            Premium Support
          </h2>
          <p className="mt-4  md:mt-10 text-md md:text-lg font-md">
            Our FirstWave support engineers are highly skilled<br /> and experienced in
            NMIS, Open-AudIT and all of our <br />commercial products and helped
            customers from<br /> Telcos, MSP, enterprise organisations.
          </p>
          <p className="mt-4 text-md md:mt-7  md:text-lg">
            We work closely with you during implementation<br /> and rollout, as well as
            post delivery of our solutions.
          </p>
          <button className="bg-ui_button hover:bg-ui_primary font-bold text-white py-2 px-5 md:py-3 md:px-7 rounded-3xl mt-6 md:mt-10">
            Go to Support
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 mr-[100px]">
          <Image src="/assets/images/Group 1000000830.png" width={1000} height={500} alt="support" className="w-full" />
        </div>
      </div>
    </div>
  </main>
  );
}
