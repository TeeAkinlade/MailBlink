import BookDemo from "@/components/BookDemo";
import Community from "@/components/Community";
import { EmailHero } from "@/components/EmailHero";
import Testimonial from "@/components/Testimonial";

const Email_Marketing = () => {
  return (
    <div>
      <EmailHero/>
      <BookDemo/>
      <Testimonial/>
      <Community/>
    </div>
  );
};

export default Email_Marketing;
