import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Button = (props: { label: string; link: string }) => {
  return (
    <Link href={props.link}>
      <button
        className="flex justify-start font-bold bg-linear-to-l from-white to-blue-500 px-4 py-2 rounded-lg shadow-lg
      w-full md:w-full lg:w-2/3 hover:bg-black"
      >
        {props.label}
        <HiArrowRight className="ml-2 w-5 h-5" />
      </button>
    </Link>
  );
};

export default Button;
