import { Metadata } from "next";
import ErrorForm from "./error-form";

export const metadata: Metadata = {
  title: "Error Form Page",
};

const ErrorFormPage = () => {
  return (
    <>
      <ErrorForm />
    </>
  );
};

export default ErrorFormPage;
