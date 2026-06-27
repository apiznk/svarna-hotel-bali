import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import Experiences from "@/components/Experiences";
import Dining from "@/components/Dining";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Hotels />
        <Experiences />
        <Dining />
        <Offers />
      </main>
      <Footer />
    </>
  );
}
