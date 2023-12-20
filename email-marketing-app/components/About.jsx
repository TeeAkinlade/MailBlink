import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-width padding-x">
      <div className="w-[553px] flex flex-col items-start justify-start gap-[32px] pt-0 pr-[48px] pb-0 pl-0 overflow-hidden">
    <div className="flex flex-col items-start justify-start overflow-hidden">
        <h2 className="w-[444px] text-[50px] leading-[60px] font-['Poppins'] font-bold text-[#1f284f]">About Us</h2>
    </div>
    <div className="flex flex-col items-start justify-start gap-[16px]">
        <p className="w-[444px] text-[20px] leading-[32px] font-['Poppins'] font-medium text-[#1f284f]">Who are we? MailBlink is a team of talented individuals working together to make software people love.</p>
        <p className="w-[444px] text-[20px] leading-[32px] font-['Poppins'] text-[#575757]">We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.</p>
    </div>
    <div className="flex flex-row items-center justify-center gap-[16px]">
        <div className="w-[173px] shrink-0 flex flex-col items-center justify-center py-[12px] px-[24px] bg-[#0070f0e5] border-[1px] border-solid border-[#0070f0e5] rounded-[30px]">
            <button className="custom-btn">Contact Us</button>
        </div>
        <div className="w-[173px] shrink-0 flex flex-col items-center justify-center py-[12px] px-[24px] bg-[#3cba79] border-[1px] border-solid border-[#3cba79] rounded-[30px]">
            <button className="text-[16px] leading-[24px] font-['Poppins'] font-bold text-[#fff] whitespace-nowrap">Book a Demo</button>
        </div>
    </div>
    <div className="w-[443px] h-[480px] border-[1px] border-solid border-[#0070f0] rounded-t-[16px] rounded-b">
      <Image src='/image/about-hero.png' alt="about-image" width='443' height='480' className="w-full object-cover" />
      <div className="w-[443px] h-[480px] bg-[#afd1f866] rounded-t-[16px] rounded-b opacity-[.98]"></div>
    </div>
</div>
    </section>
  );
};


export default About;
