"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Vedic & Advanced Astrology",
      desc: "Ancient wisdom for clarity and life guidance.",
      image: "/assets/astrology.jpg",
    },
    {
      title: "KP Astrology & Nakshatra",
      desc: "Precise predictions through stellar analysis.",
      image: "/assets/kpastrology.jpeg",
    },
    {
      title: "Vastu & AstroVastu",
      desc: "Harmonize home & workspace energies.",
      image: "/assets/vastu.jpeg",
    },
    {
      title: "Reiki & Chakra Healing",
      desc: "Energy healing for peace & balance.",
      image: "/assets/reiki.jpeg",
    },
    {
      title: "Spiritual Coaching",
      desc: "Inner growth & conscious transformation.",
      image: "/assets/coaching.jpeg",
    },
    {
      title: "Personal Remedies",
      desc: "Customized spiritual & astrological solutions.",
      image: "/assets/remedies.jpeg",
    },
  ];

  return (
    <section className="py-20 px-5 bg-[#fffaf0]">
      <h2 className="text-center font-playfair text-3xl md:text-4xl mb-14 text-[#78350f]">
        Services Offered
      </h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-md
                       transition-all duration-500
                       hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700
                           group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg text-[#3f2f23] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#5a4a3c] leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
