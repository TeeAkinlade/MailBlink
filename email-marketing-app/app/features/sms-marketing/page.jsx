import { SmsHero } from "./SmsHero";
import Section2 from "./Section2";
import Support from "./Support";
import NMIS from "./NMIS";
import BookDemo from "@/components/BookDemo";
import Testimonial from "@/components/Testimonial";
import Community from "@/components/Community";

const Sms_Marketing = () => {
  return (
    <div className="bg-white m-0">
      <SmsHero />
      <Section2 />
      <BookDemo />
      <Support />
      <Testimonial />
      <NMIS />
      <Community />
    </div>
  );
};

export default Sms_Marketing;
