import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-visible pb-8 pt-24 sm:pt-0">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-20">
        <div className="text-left max-w-[560px]">

          {/* Title above logo */}
          <h2 className="text-[#fde68a] text-[1.9rem] sm:text-[2.2rem] font-semibold font-playfair tracking-wide mb-4 leading-tight max-w-[320px] sm:max-w-full">
  Astrovastu Research & Consultancy
</h2>
        <h4 className="text-[#fde68a] text-[1rem] sm:text-[2.2rem] font-semibold font-playfair tracking-wide mb-4 leading-tight max-w-[320px] sm:max-w-full">Acharya Dr. Neetu Mohan</h4>

          {/* Logo */}
       <Image
  src="/assets/astro-logo.webp"
  alt="AstroVastu Logo"
  width={320}
  height={240}
  className="mb-6 object-contain w-[260px] sm:w-[240px] md:w-[260px]"
/>

          {/* Heading */}
          <h1 className="font-playfair text-white text-[2.2rem] md:text-[3.4rem] font-bold leading-tight mb-5 drop-shadow-lg">
            Ancient Wisdom & Insights
            <br />
            <span className="text-[#fde68a]">
              for a Peaceful, Prosperous Life
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/85 text-[0.95rem] md:text-[1.15rem] font-medium mb-8 leading-relaxed">
            Welcome to AstroVastu—where Astrology and Vastu Shastra guide you to
            balance, success, and inner peace through accurate insights and
            practical remedies.
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/9686660073"
            className="group inline-flex items-center gap-4
              px-7 py-3 rounded-full
              border border-[#fde68a]/70
              text-[#fde68a] font-semibold
              bg-white/5 backdrop-blur-md
              shadow-[0_0_0_0_rgba(253,230,138,0.4)]
              hover:shadow-[0_0_30px_-5px_rgba(253,230,138,0.6)]
              hover:bg-[#fde68a]/10
              transition-all duration-500"
          >
            Book a Consultation
            <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}