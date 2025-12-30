"use client";

import LoginForm from "@/components/forms/auth/login-form";
import Image from "next/image";
// import logo from "@/public/purple-dices.png"; // placeholder for school logo

import logo from "@/public/SkuulBusLogo1.png";
// import PageTransition from "@/components/animations/page-transitions";

export default function LoginPage() {
  return (
    // <PageTransition>
    <div className="flex min-h-screen animate-login-transition">
      <div className="m-auto flex flex-col items-center w-full max-w-md p-6">
        <Image
          src={logo}
          alt="Skuul Logo"
          width={200}
          height={120}
          className="mb-6"
        />
        <LoginForm />
      </div>
    </div>
    // </PageTransition>
  );
}
