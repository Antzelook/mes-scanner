import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Button = () => {
  return (
    <Link href="/errorForm">
      <button
        className="flex justify-start font-bold bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition
      w-full md:w-full lg:w-2/3"
      >
        Καταχώρηση Βλάβης
        <HiArrowRight className="ml-2 w-5 h-5" />
      </button>
    </Link>
  );
};

export default Button;
