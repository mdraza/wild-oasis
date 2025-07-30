import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  return (
    <nav className="z-10 text-xl ml-5">
      <ul className="flex gap-3 md:gap-16 items-center text-[16px] md:text-xl">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center md:gap-2 gap-1"
            >
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-5 md:h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>{session.user.name.split(" ")[0]}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
