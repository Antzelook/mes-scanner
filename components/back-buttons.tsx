import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <button className="flex items-center justify-center border rounded-xl font-bold w-30 m-4 bg-blue-200">
        Πίσω
      </button>
    </Link>
  );
};

export default BackButton;
