import { Metadata } from "next";
import ErrorsHistory from "./errors-history-table";

export const metadata: Metadata = {
  title: "History Page",
};

const ErrorsHistoryPage = () => {
  return <>
  <ErrorsHistory />
  </>;
};

export default ErrorsHistoryPage;
