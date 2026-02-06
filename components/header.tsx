import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <>
      <header className="w-full p-4 shadow-xl transition bg-linear-to-r from-white from-50%导 to-blue-500">
        <div className="flex flex-col md:flex-row md:justify-start items-center gap-4">
          <Link href="/">
            <Image
              src="/images/MESOGEOS_DIGITAL_LOGO.png"
              alt="Mes digital logo"
              width={300}
              height={200}
            />
          </Link>
          <div>
            {session && (
              <button
                onClick={() => signOut()}
                className=" p-2 rounded-[30px] bg-blue-200 font-bold"
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
