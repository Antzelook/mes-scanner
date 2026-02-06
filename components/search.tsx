import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="flex items-center w-full md:w-1/3 border shadow-lg rounded-xl md:ml-auto bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 p-2 focus:outline-none"
      />
      <button className="p-2 bg-white rounded-xl hover:bg-teal-200">
        <FaSearch className="h-5 w-5 text-blackS" />
      </button>
    </div>
  );
};

export default Search;
