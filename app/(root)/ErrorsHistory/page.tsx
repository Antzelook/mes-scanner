import { Metadata } from "next";
import ErrorsHistory from "./errors-history-table";
import BackButton from "@/components/back-buttons";

export const metadata: Metadata = {
  title: "History Page",
};

const ErrorsHistoryPage = () => {
  return (
    <>
      <BackButton />
      <ErrorsHistory />
    </>
  );
};

export default ErrorsHistoryPage;
