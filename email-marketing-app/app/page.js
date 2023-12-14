<<<<<<< HEAD
import Hero from "@/app/home/Hero";
import Campaign from "./home/Campaign";
import Subscribe from "./home/Subscribe";
import Services from "./home/Services";
import Footer from "./home/footer/Footer";
import About from "./home/About";
import Nav from "./home/nav/Nav";

=======
import About from "./home/About";
import Campaign from "./home/Campaign";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "./home/Services";
import Subscribe from "./home/Subscribe";
>>>>>>> 03691fac21fe7c9d1cbc741974d76de17d85be51

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
