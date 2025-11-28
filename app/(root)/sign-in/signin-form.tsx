"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminSignInFormType } from "@/types";
import { adminSgnInSchema } from "@/lib/validators";
import { defaultAdminSignInValues } from "@/lib/constants";

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdminSignInFormType>({
    resolver: zodResolver(adminSgnInSchema),
    defaultValues: defaultAdminSignInValues,
  });

  const onSubmit = async (data: AdminSignInFormType) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });

    if (res?.error) {
      alert("Invalid email or password");
      return;
    }

    reset(defaultAdminSignInValues);
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded shadow-lg w-100 space-y-4"
    >
      <h1 className="text-2xl font-semibold text-center">Admin Login</h1>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="w-full p-2 border rounded"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">{errors.email.message}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="w-full p-2 border rounded"
      />
      {errors.password && (
        <p className="text-red-600 text-sm">{errors.password.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-2 bg-blue-600 text-white rounded"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default SignInForm;
