import About from "./Home-components/About";
import Campaign from "./Home-components/Campaign";
import Footer from "./Home-components/Footer";
import Hero from "./Home-components/Hero";
import Nav from "./Home-components/Nav";
import Services from "./Home-components/Services";
import Subscribe from "./Home-components/Subscribe";


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
