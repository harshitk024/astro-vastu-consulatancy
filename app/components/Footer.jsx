import Image from "next/image";
import { assets } from "@/Assets/assets";

export default function Footer() {
  return (
    <footer className="bg-[#0f1217] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5
                      flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold tracking-[0.25em] text-white">
            ASTRO VASTU
          </h2>
          <p className="text-[12px] tracking-[0.35em] text-white/50 uppercase mt-1">
            Consultancy
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <Image
            src={assets.facebook_icon}
            alt="Facebook"
            width={34}
            height={34}
            className="opacity-70 hover:opacity-100 transition"
          />
          <Image
            src={assets.instagram_icon}
            alt="Instagram"
            width={34}
            height={34}
            className="opacity-70 hover:opacity-100 transition"
          />
          <Image
            src={assets.twitter_icon}
            alt="X"
            width={34}
            height={34}
            className="opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-[11px] text-white/40 pb-3">
        © {new Date().getFullYear()} Astro Vastu Consultancy
      </div>
    </footer>
  );
}
