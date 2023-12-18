import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonial = (props) => {
  return (
    <section className="md:h-[56rem] lg:p-10 md:p-5 p-10 bg-white flex flex-col justify-center">
      <div className=" md:ml-[10%] md:mb-0 mb-8">
        <Image
          src="/assets/icons/quote_mark.svg"
          width={100}
          height={100}
          className="md:w-[100px] w-[60px] "
        />
        <div className="md:-mt-14 md:ml-16 -mt-10 ml-12">
          <h2 className="text-ui_primary font-bold md:text-[2.5rem] text-[2rem]">
            Real Stories from <br /> Real Customers
          </h2>
          <p className=" text-Ash md:text-lg">Get inspired by these stories.</p>
        </div>
      </div>
      <div className=" flex md:flex-nowrap flex-wrap items-center justify-center gap-5">
        <div className="md:w-[22rem]">
          <TestimonialCard
            feedback={
              "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
            }
            image={"/assets/image/display_pic.jpeg"}
            name={"Floyd Miles"}
            position={"Co-Founder, BookMyShow"}
          />
        </div>
        <div>
          <div className="md:w-[25.8rem] mb-5">
            <TestimonialCard
              feedback={
                "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
              }
              image={"/assets/image/display_pic.jpeg"}
              name={"Floyd Miles"}
              position={"Co-Founder, BookMyShow"}
            />
          </div>
          <div className="md:w-[22rem]">
            <TestimonialCard
              feedback={"Landify saved our time in designing my company page."}
              image={"/assets/image/display_pic.jpeg"}
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
