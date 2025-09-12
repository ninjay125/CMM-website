import Link from "next/link";
import Image from "next/image";
import CMMlogo from "./CMMlogo.jpg";

export default function Nav() {
  return (
    <nav className="bg-black py-4 flex items-center justify-center space-x-6 flex-wrap">
      <Link href="/">
        <Image
          src={CMMlogo}
          alt="CMM Logo"
          width={100}
          height={34}
          className="cursor-pointer"
        />
      </Link>

      <ul className="flex flex-wrap space-x-4 md:space-x-6">
        <li>
          <Link
            href="/aboutme"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-500 hover:text-gray-300 font-medium px-2 py-1 rounded transition-all duration-200"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-500 hover:text-gray-300 font-medium px-2 py-1 rounded transition-all duration-200"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-500 hover:text-gray-300 font-medium px-2 py-1 rounded transition-all duration-200"
          >
            Events
          </Link>
        </li>
      </ul>
    </nav>
  );
}
