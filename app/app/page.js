import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Consultation from "@/components/Consultation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Header from "@/components/HeaderMain";
import { ToastContainer } from "react-toastify";
import BlogList from "@/components/BlogList";
import YoutubeSection from "@/components/Youtube";
export default function Home() {
  return (
    <div className="pt-[120px]">
      <ToastContainer />
      <Header />
      <Hero />
      <section className="my-24">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Blogs</h2>

        <BlogList limit={3} showViewMore />
      </section>
      <About />
      <YoutubeSection />
      <Services />
      <Consultation />
      <ContactCTA />
      <Footer />
    </div>
  );
}
