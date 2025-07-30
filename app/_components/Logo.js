import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 md:gap-4 z-10">
      <Image
        src={logo}
        quality={90}
        height="30"
        width="30"
        alt="The Wild Oasis logo"
        className="md:w-[50px] md:h-[50px] xl:w-[60px] xl:h-[60px]"
      />
      <span className="font-semibold text-primary-100 md:text-xl text-[16px]">
        The <span className="text-[#dfad70] font-medium">Wild</span> Oasis
      </span>
    </Link>
  );
}

export default Logo;
