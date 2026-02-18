import Image from "next/image";
import Link from "next/link";
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
          <div className="mt-3 flex gap-2 justify-center sm:justify-start">
            <Image
              src="/assets/phone.svg"
              alt="Facebook"
              width={15}
              height={15}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            />
            <Link
            href="tel:+919686660073"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-95"
          >
            +91 9686660073
          </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          
          <Link
            href="https://www.facebook.com/astroneetumohan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              width={34}
              height={34}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            />
          </Link>

          <Link
            href="https://www.instagram.com/dr.neetu.mohan?igsh=eTBsdWl1MmV1cTA4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={34}
              height={34}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@dr.neetu.mohan."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/youtube.svg"
              alt="YouTube"
              width={34}
              height={34}
              className="opacity-70 hover:opacity-100 transition cursor-pointer"
            />
          </Link>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-[11px] text-white/40 pb-3">
        © {new Date().getFullYear()} Astro Vastu Consultancy
      </div>
    </footer>
  );
}
