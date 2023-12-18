import { BookDemo } from "@/components/BookDemo";
import EmailHero from "./EmailHero";
import { Testimonial } from "@/components/Testimonial";
import { Community } from "@/components/Community";

const Email_Marketing = () => {
  return (
    <div>
      <EmailHero />
      <BookDemo />
      <Testimonial />
      <Community />
    </div>
  );
};

export default Email_Marketing;
