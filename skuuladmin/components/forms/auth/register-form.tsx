"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const registerSchema = z.object({
  firstName: z.string().min(3, "At least two character"),
  lastName: z.string().min(3, "At least three character"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+()\-\s]+$/, "Invalid phone number"),
  email: z.string().email(),
  password: z.string().min(6, " Password should exceed six characters"),
});

type RegisterValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (values: RegisterValues) => {
    console.log("Register attempt:", values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm p-6 bg-white rounded-xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <span>
          <Input placeholder="First Name" {...register("firstName")} />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </span>
        <span>
          <Input placeholder="Last Name" {...register("lastName")} />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </span>
      </div>

      <div className="mb-4">
        <Input placeholder="Phone Number" {...register("phoneNumber")} />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="mb-4">
        {/* <Input placeholder="Phone Number" {...register("phoneNumber")} />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )} */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select the position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="super-admin">Super Admin</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <Input placeholder="Email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Loading..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-gray-500 mt-1">
        Already have an account?{" "}
        <a href="/auth/login" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}
