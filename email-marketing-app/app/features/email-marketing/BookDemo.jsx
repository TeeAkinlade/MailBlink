import Form from "../../../components/Form";

const BookDemo = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col items-center justify-center lg:gap-20 md:gap-10 bg-white lg:px-24 md:px-10 px-7">
        <div className="md:w-[28.8rem] md:text-start text-center w-full md:relative top-24 md:mt-0 mt-24">
          <span className=" md:text-[2rem] text-[1.5rem] font-semibold text-[#0070F0E5]">
            Save upto 50% of your IT cost.
          </span>
          <h2 className=" md:text-[2.5rem] text-[2rem] font-bold mt-3 mb-3">
            Book Your 15 minute Call
          </h2>
          <p className=" text-Ash md:text-xl text-lg md:w-[80%] w-full">
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT.
          </p>
        </div>
        <div className="md:w-[36.15rem] w-full z-[1] relative md:top-[11rem] top-[5rem]">
          <Form />
        </div>
      </div>
      <div className="flex relative items-center bg-[#1F384F] w-full md:h-[15rem] h-[12rem]">
        <div className=" rounded-full bg-[#0070F0E5] opacity-70 md:w-[11.6rem] md:h-[11.6rem] w-[9.6rem] h-[9.6rem] relative -left-[7rem]"></div>
        <img
          src="/assets/icons/dots.svg"
          alt=""
          className="absolute bottom-6 left-[45%] w-36"
        />
      </div>
    </section>
  );
};

export default BookDemo;
