import { Metadata } from "next";
import HistoryTable from "./history-table";

export const metadata: Metadata = {
  title: "History Page",
};

const HistoryPage = () => {
  return (
    <>
      <HistoryTable />
    </>
  );
};

export default HistoryPage;
