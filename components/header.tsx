import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      <header className="w-full p-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-start items-center gap-4">
          <Link href="/">
            <Image
              src="/images/mes-logo.png"
              alt="Mes digital logo"
              width={100}
              height={100}
            />
          </Link>

          <Link href="/">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Mesogeos Digital
            </h1>
          </Link>
          <div className="flex items-center w-full md:w-1/3 border shadow-lg rounded-xl md:ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 focus:outline-none"
            />
            <button className="p-2 bg-white rounded-xl hover:bg-teal-200">
              <FaSearch className="h-5 w-5 text-blackS" />
            </button>
          </div>
          <div>
            {session && (
              <button
                onClick={() => signOut()}
                className="bg-red-500 p-2 rounded-[30px]"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
