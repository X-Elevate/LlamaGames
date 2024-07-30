import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const textColor = "#FFF4D6";
  return (
    <footer
      className="bg-gradient-to-tr from-gradientFirstColor to-gradientSecondColor py-8 pt-20 px-4"
      style={{
        borderTopLeftRadius: "5rem",
        borderTopRightRadius: "5rem",
        color: textColor,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-2 gap-x-32 gap-y-4 mb-6 md:mb-0">
          <Link href="/about" className="hover:underline ">
            About us
          </Link>
          <Link href="/milestones" className="hover:underline">
            Milestones
          </Link>
          <Link href="/games" className="hover:underline">
            Games
          </Link>
          <Link href="/mission" className="hover:underline">
            Mission
          </Link>
          <Link href="/licensing" className="hover:underline">
            Licensing
          </Link>
          <Link href="/careers" className="hover:underline">
            Careers
          </Link>
        </div>

        <div className="mb-6 md:mb-0 flex justify-center items-center">
          <Image
            src="/footer-logo.svg"
            alt="LlamaGames Logo"
            width={120}
            height={120}
          />
        </div>

        <div className="relative flex space-x-7 justify-center items-center">
          {/* <div className='absolute w-full h-full'>
                        <div className='before:content-[""] before:absolute before:bg-[#FFBF40] before:opacity-[0.05] before:rounded-full before:blur-lg before:w-[50px] before:h-[50px] before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 sm:before:w-[200px] sm:before:h-[200px] sm:before:top-[-20px] md:before:w-[250px] md:before:h-[250px] md:before:top-[-40px] lg:before:w-[300px] lg:before:h-[300px] lg:before:top-[-50px]'></div>
                    </div> */}
          <SocialIcon href="#" icon="linkedin" />
          <SocialIcon href="#" icon="facebook" />
          <SocialIcon href="#" icon="twitter" />
          <SocialIcon href="#" icon="instagram" />
        </div>
      </div>

      <div
        className="border-t mt-8 pt-4 text-center text-xs flex justify-center items-center"
        style={{ borderColor: "#D1D4D7", gap: "24px" }}
      >
        <p>© Copyright 2024 LLama Games / All rights reserved.</p>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link href={href} className="flex justify-center items-center">
      <Image
        src={`/${icon}-icon.svg`}
        alt={`${icon} icon`}
        width={48}
        height={48}
      />
    </Link>
  );
}
