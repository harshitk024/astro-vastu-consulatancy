export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

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

      {/* Spiritual Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-8 md:px-20">
        <div className="text-left max-w-[560px]">

          <h1 className="font-playfair text-white text-[2.6rem] md:text-[3.4rem] font-bold leading-tight mb-6 drop-shadow-lg">
            Astrology, Vastu & Healing
            <br />
            <span className="text-[#fde68a]">
              for Clarity and Balance
            </span>
          </h1>

          <p className="text-white/85 text-[1.05rem] md:text-[1.15rem] font-medium mb-10 leading-relaxed">
            Personalized AstroVastu guidance rooted in ancient wisdom,
            harmonizing energies for peace, prosperity, and purpose.
          </p>

          {/* Modern CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-4
              px-8 py-3 rounded-full
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
