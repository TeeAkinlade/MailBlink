// import Image from 'next/image'

import About from "./Home-components/About";
import Hero from "./Home-components/Hero";
import Nav from "./Home-components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
    </main>
  )
}
