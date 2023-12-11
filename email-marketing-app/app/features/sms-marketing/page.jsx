import React from "react";
import {SmsHero} from "./SmsHero";
import Section2 from "./Section2";
import Support from "./Support";
import NMIS from "./NMIS";
import BookDemo from "@/components/BookDemo";
import Testimonial from "@/components/Testimonial";
import Community from "@/components/Community";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";


const Sms_Marketing = () => {
  return(
    <div className="bg-white m-0">
      <Nav/>
      <SmsHero />
      <Section2/>
      <BookDemo/>
      <Support/>
      <Testimonial/>
      <NMIS/>
      <Community/>
      <Footer/>
    </div>
  );
};

export default Sms_Marketing;
