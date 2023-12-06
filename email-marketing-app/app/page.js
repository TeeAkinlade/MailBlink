import About from "../components/About";
import Campaign from "../components/Home-components/Campaign";
import Footer from "../components/Home-components/Footer";
import Hero from "../components/Home-components/Hero";
import Nav from "../components/Home-components/Nav";
import Services from "../components/Home-components/Services";
import Subscribe from "../components/Home-components/Subscribe";

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
