"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactPage from "@/components/contact/contactUs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/animations/page-transitions";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [animateOut, setAnimateOut] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: LoginValues) => {
    // placeholder – will replace with RTK later
    console.log("Login attempt:", values);
    setAnimateOut(true); // trigger exit animation

    setTimeout(() => {
      router.push("/overview");
      // router.push("/dashboard"); // navigate after animation
    }, 500); // match animation duration
  };
  return (
    <PageTransition>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full p-8 bg-white rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login your account
        </h2>

        <div>
          <Input
            placeholder="Email"
            {...register("email")}
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
            className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* REMEMBER ME && FORGET PASSWORD */}
        <div className="flex justify-between text-xs text-muted-foreground">
          {/* <span> */}
          <p className="flex gap-1 items-center">
            <input
              type="checkbox"
              name="remembered"
              id="remembered"
              className="cursor-pointer"
            />
            Remember me
          </p>
          <p className="cursor-pointer hover:underline hover:text-blue-600">
            Forget Password?
          </p>
          {/* </span> */}
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Loading..." : "Login"}
          {!isSubmitting && <SendHorizontal />}
        </Button>
        {/* <SendHorizontal /> */}

        <p className="text-center text-sm text-gray-500">
          Don't have an account?
          {/* <a href="/auth/register" className="text-blue-600 hover:underline">
          Contact Developers
        </a> */}
          <Dialog>
            <DialogTrigger className="text-blue-600 hover:underline cursor-pointer">
              Contact Developers
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll h-[90vh]">
              <DialogTitle>Get in touch</DialogTitle>
              <DialogDescription>
                {" "}
                Our friendly team would love to hear from you.
              </DialogDescription>
              <ContactPage />
            </DialogContent>
          </Dialog>
        </p>
      </form>
    </PageTransition>
  );
}
