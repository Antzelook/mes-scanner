import { Metadata } from "next";
import ErrorForm from "./error-form";

export const metadata: Metadata = {
  title: "Error Form Page",
};

const ErrorFormPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Καταχώρηση Βλάβης</h1>
      <ErrorForm />
    </div>
  );
};

export default ErrorFormPage;
