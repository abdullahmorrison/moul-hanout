import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import routes from "@/lib/routes";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-6 font-bold text-primary">
      <Link href="/" className="text-lg">
        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-[50%] border-2 border-white bg-primary p-2 text-white outline-2 outline-primary">
          <span>حلال</span>
          <span>Halal</span>
        </div>
      </Link>

      <div className="flex items-center justify-center space-x-4 text-2xl">
        <Link href={routes.home} className="hover:underline">
          Home
        </Link>
        <Link href={routes.menu} className="hover:underline">
          Menu
        </Link>
        <Link href={routes.grocery} className="hover:underline">
          Grocery
        </Link>
        <Link href={routes.catering} className="hover:underline">
          Catering
        </Link>
        <Link href={routes.contact} className="hover:underline">
          Contact
        </Link>
        <SocialMediaLinks />
      </div>
    </nav>
  );
}
