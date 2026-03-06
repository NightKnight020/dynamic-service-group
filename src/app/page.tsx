import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import WhyDSG from "@/components/WhyDSG";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <WhyDSG />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
