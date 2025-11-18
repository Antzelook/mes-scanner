import { Metadata } from "next";
import Button from "../components/button";

export const metadata: Metadata = {
  title: "Mes-Digital-Web",
};

const HomePage = () => {
  return (
    <div className="flex flex-col m-5 space-y-5">
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default HomePage;
