import Image from "next/image";
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";

export const Header = () => {
  return (
    <header className="mx-auto w-[1024px] my-6 flex items-center justify-between h-12">
      <Image
        src="/helios.svg"
        alt="Helios"
        width={512}
        height={115}
        className="w-24"
      />

      <Link href="https://github.com/HeliosShieldProject">
        <VscGithubInverted className="text-3xl" />
      </Link>
    </header>
  );
};
