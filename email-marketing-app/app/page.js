import Hero from "@/app/home/Hero";
import Campaign from "./home/Campaign";
import Subscribe from "./home/Subscribe";
import Services from "./home/Services";
import Footer from "./home/footer/Footer";
import About from "./home/About";
import Nav from "./home/nav/Nav";


export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero />
      <About />
      <Campaign />
      <Subscribe />
      <Services />
      <Footer />
    </main>
  );
}
