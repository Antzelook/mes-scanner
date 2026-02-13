"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/header";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1 wrapper">
            {children}
            <Toaster position="top-center" />
          </main>
        </div>
      </Provider>
    </SessionProvider>
  );
}
