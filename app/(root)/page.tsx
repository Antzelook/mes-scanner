import Button from "@/components/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

const HomePage = () => {
  return (
    <div className="flex flex-col m-5 space-y-5">
      <Button label="Νέα Καταχώρηση" link="/errorForm" />
      <Button label="Ιστορικό" link="/history" />
    </div>
  );
};

export default HomePage;
