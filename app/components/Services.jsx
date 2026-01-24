import Link from 'next/link'
import Image from 'next/image';
import { assets } from '@/Assets/assets';

export default function Services() {
  return (
    <section className="py-[70px] px-5 text-center bg-[#fffaf0]">
      <h2 className="font-playfair text-[2rem] mb-5">
        Services Offered
      </h2>

      <div className="grid gap-5 max-w-[1000px] mx-auto mt-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {[
          "Vedic & Advanced Astrology",
          "KP Astrology & Nakshatra Analysis",
          "Vastu & AstroVastu Solutions",
          "Reiki Healing & Chakra Balancing",
          "Coaching & Learning Programs",
          "Personalized Remedies",
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
