import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="mt-5 max-width padding-y padding-x md:h-[50rem] h-fit bg-white flex flex-col justify-center">
      <div className=" md:ml-[10%] md:mb-0 mb-8">
        <Image
          src="/assets/icons/quote_mark.svg"
          width={100}
          height={100}
          className="md:w-[100px] w-[60px] "
        />
        <div className="md:-mt-14 md:ml-16 -mt-10 ml-12">
          <h2 className="text-ui_primary font-bold lg:text-[2.5rem] md:text-[2.1rem] text-[1.8rem] sm:w-[35%]">
            Real Stories from Real Customers
          </h2>
          <p className=" text-Ash md:text-lg">Get inspired by these stories.</p>
        </div>
      </div>
      <div className=" flex md:flex-nowrap flex-wrap items-center justify-center gap-7">
        <div className="md:w-[22rem]">
          <TestimonialCard
            feedback={
              "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
            }
            image={"/assets/images/display_pic.jpeg"}
            name={"Floyd Miles"}
            position={"Co-Founder, BookMyShow"}
          />
        </div>
        <div>
          <div className="md:w-[25.8rem] mb-7">
            <TestimonialCard
              feedback={
                "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
              }
              image={"/assets/images/display_pic.jpeg"}
              name={"Floyd Miles"}
              position={"Co-Founder, BookMyShow"}
            />
          </div>
          <div className="md:w-[22rem]">
            <TestimonialCard
              feedback={"Landify saved our time in designing my company page."}
              image={"/assets/images/display_pic.jpeg"}
              name={"Floyd Miles"}
              position={"Co-Founder, BookMyShow"}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 gap-1 flex justify-center items-center">
        <span className="w-2 h-1 bg-[#00000033] rounded-md"></span>
        <span className="w-2 h-1 bg-[#00000033] rounded-md"></span>
        <span className="w-3 h-1 bg-Ash rounded-md"></span>
        <span className="w-2 h-1 bg-[#00000033] rounded-md"></span>
        <span className="w-2 h-1 bg-[#00000033] rounded-md"></span>
      </div>
    </section>
  );
};

export default Testimonial;
