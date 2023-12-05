import About from "../components/About";
import Campaign from "../components/Campaign";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

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
