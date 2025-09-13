import Link from "next/link";
import Image from "next/image";
import CMMlogo from "./CMMlogo.jpg";

export default function Nav() {
  return (
    <nav className="    bg-black  py-4 flex items-center justify-center space-x-6">
      <Link href="/">
        <Image
          src={CMMlogo}
          alt="CMM Logo"
          width={120}
          height={120}
          className="cursor-pointer"
        />
      </Link>

      <ul className="flex space-x-6">
        <li>
          <Link href="/aboutme" className=" text-3xl text-red-500 hover:text-gray-300 font-medium">
            About Me
          </Link>
        </li>
        {/* Add more links here if needed */}
        <li>
          <Link href="/contact" className=" text-3xl text-red-500 hover:text-gray-300 font-medium">
            Contact
          </Link>
        </li>
                <li>
          <Link href="/events" className=" text-3xl text-red-500 hover:text-gray-300 font-medium">
            Events
          </Link>
          
        </li>
      </ul>
    </nav>
  );
}
