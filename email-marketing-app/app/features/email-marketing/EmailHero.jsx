import Link from "next/link";
import Image from "next/image";
import { stats } from "@/constants";

export const EmailHero = () => {
  return (
    <main className="max-width">
      <div className=" bg-white  flex-between md:flex-row flex-col md:h-[45rem] md:p-0 p-5 pb-20 pt-10 ">
        <div className=" md:w-[40%] -mr-[20rem] relative z-[1] sm:ml-16 ml-[2.25rem] h-fit md:text-lg w-full flex flex-col md:items-start items-center  text-base text-ui_primary font-medium">
          <div className="relative md:-top-2 top-5 ">
            <h2 className="md:w-[75%] w-full font-bold lg:text-[3.1rem] md:text-[2.8rem] text-[2.5rem] md:leading-[3.8rem] leading-[3rem]">
              Helping people communicate in simple ways
            </h2>
            <p className=" text-primaryBlack text-[14px] mt-5 md:w-[75%] w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, perferendis! Laborum ullam,us, blanditiis provident
              corporis odit praesentium sunt iste?.
            </p>
            <Link href="/campaigns">
              <button className="custom-btn mt-4">
                Get Started
              </button>
            </Link>
          </div>
          <div className=" relative md:top-10 top-20 md:w-[140%] w-full">
            <img
              src="/assets/icons/hero_dots.svg"
              alt=""
              className=" absolute sm:top-[4.6rem] top-[5.5rem] -left-6 md:w-28 w-20"
            />
            <div className=" relative md:px-10 md:py-6 p-4 justify-between flex bg-white rounded-lg shadow-lg">
              {stats.map((stat) => (
                <div className="w-[30%]" key={stat.id}>
                  <span className=" font-semibold text-ui_secondary1 md:text-lg text-base block">
                    {stat.title}
                  </span>
                  <p className=" md:text-base text-sm mt-2 text-primaryBlack md:w-[80%] w-full">
                    {stat.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" md:w-[70%] bg-[#EFF6FE] md:h-full sm:pr-[4.5rem] md:flex justify-end items-center hidden rounded-bl-[4rem]">
          <div className="h-[70%] w-[70%]">
          <Image
          src="/assets/images/student-849825_1280.jpg"
          alt=""
          width={400}
          height={300}
          quality={100}
           className="h-full w-full object-cover rounded-md"/>
          </div>
        </div>
      </div>
    </main>
  );
};