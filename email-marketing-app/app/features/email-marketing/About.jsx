import Image from "next/image";

export const EmailAbout = () => {
  return (
    <main className="max-width">
      <div className="mt-28 padding-x padding-y relative bg-white flex-between md:flex-row flex-col h-fit">
        <div className=" absolute md:top-[28rem] top-20 left-0 w-[64%] md:h-[55rem] h-[140rem] bg-[#EFF6FE] rounded-tr-[4rem]"></div>
        <div className="md:w-[42%] w-full z-[1] md:h-[35rem] sm:h-[25rem] h-[20rem]">
          <Image
            src="/assets/images/pexels-canva-studio-3194524.jpg"
            alt=""
            width={500}
            height={350}
            quality={100}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="z-[2] md:absolute md:bottom-[5rem] md:left-[33rem] relative bottom-7 -right-32 w-fit">
          <img
            src="/assets/icons/hero_dots.svg"
            alt=""
            className=" md:w-32 w-20"
          />
        </div>

        <div className=" relative lg:w-[50%] md:w-[50%] w-fit md:text-lg text-base text-ui_primary font-medium">
          <h2 className=" font-bold lg:text-[2.5rem] md:text-[2.1rem] text-[1.8rem] md:leading-[3rem] leading-[2.5rem]">
            Helping people communicate in simple ways
          </h2>
          <p className=" text-primaryBlack font-normal md:text-[16px] text-[14px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            cupiditate delectus est distinctio veritatis. Hic dolorem ipsa
            expedita odit, rerum asperiores harum ratione voluptatum laborum
            ullam excepturi consectetur deserunt est. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio placeat ducimus nostrum est nisi
            excepturi, asperiores architecto dolorem dolor laborum perspiciatis,
            rem quo harum omnis ut beatae delectus porro quisquam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quia nemo voluptatibus
            eius odio voluptates ab aperiam laudantium architecto, sapiente
            harum, incidunt nobis quo nostrum, repellat velit officia temporibus
            similique fugit.
          </p>
        </div>
      </div>
    </main>
  );
};
