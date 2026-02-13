import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center w-full p-1.5 md:w-1/3 border rounded-xl md:ml-auto bg-white">
      <input
        type="text"
        placeholder="Αναζήτηση..."
        className="flex-1 p-1 px-2 focus:outline-none text-sm"
      />
      <button className="p-1.5 bg-white rounded-md hover:bg-blue-400">
        <FaSearch className="h-4 w-4 text-black" />
      </button>
    </div>
  );
};

export default Search;
