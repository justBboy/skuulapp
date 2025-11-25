"use client";

import LoginForm from "@/components/forms/auth/login-form";
// import { Purple_Purse } from "next/font/google";
import Image from "next/image";
import logo from "@/public/purple-dices.png"; // placeholder for school logo
import { LoginFm } from "@/components/forms/auth/login-fm";
import PageTransition from "@/components/animations/page-transitions";

export default function LoginPage() {
  return (
    // <PageTransition>
    <div className="flex min-h-screen animate-login-transition">
      <div className="m-auto flex flex-col items-center w-full max-w-md p-6">
        <Image
          src={logo}
          alt="Skuul Logo"
          width={100}
          height={120}
          className="mb-6"
        />
        <LoginForm />
        {/* <LoginFm /> */}
      </div>
    </div>
    // </PageTransition>
  );
}
