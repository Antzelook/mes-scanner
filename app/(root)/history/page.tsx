import { Metadata } from "next";
import BackButton from "@/components/back-buttons";
import HistoryTable from "./history-table";

export const metadata: Metadata = {
  title: "History Page",
};

const HistoryPage = () => {
  return (
    <>
      <BackButton />
      <HistoryTable />
    </>
  );
};

export default HistoryPage;
