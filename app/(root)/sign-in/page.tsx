import { Metadata } from "next";
import SignInForm from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-150">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
