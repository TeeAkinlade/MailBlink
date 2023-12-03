"use client";

import Image from "next/image";

import About from "./Home/About";
import Campaign from "./Home/Campaign";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Nav from "./Home/Nav";
import Services from "./Home/Services";
import Subscribe from "./Home/Subscribe";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Campaign />
      <Subscribe />
      <Services />
      <Footer />
    </main>
  );
}
