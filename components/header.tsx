import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-950 w-full p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
        {/* Title */}
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-400">Mes-Digital-web</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/3 bg-white rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 focus:outline-none"
          />
          <button className="p-2 bg-white hover:bg-gray-200">
            <FaSearch className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
