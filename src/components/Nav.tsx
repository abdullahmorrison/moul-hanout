import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 font-bold text-primary">
      <Link href="/" className="text-lg">
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-[50%] border-2 border-white bg-primary p-2 text-white outline-2 outline-primary">
          <span>حلال</span>
          <span>Halal</span>
        </div>
      </Link>

      <div className="flex items-center justify-center space-x-4 text-xl">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/menu" className="hover:underline">
          Menu
        </Link>
        <Link href="/grocery" className="hover:underline">
          Grocery
        </Link>
        <Link href="/catering" className="hover:underline">
          Catering
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <SocialMediaLinks />
      </div>
    </nav>
  );
}
