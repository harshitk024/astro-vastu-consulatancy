import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Consultation from "@/components/Consultation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderMain";
import { ToastContainer } from "react-toastify";
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Hero />
      <About />
      <Services />
      <Consultation />
      <ContactCTA />
      <Footer />
    </>
  );
}
