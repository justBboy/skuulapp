"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MoveLeft, SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import ButtonComp from "@/components/ButtonComp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
// import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import { toast } from "sonner";

// ✅ VALIDATION SCHEMA WITH ZOD FOR ALL INPUT FEIDS

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  tel: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+()\-\s]+$/, "Invalid phone number"),
  feedback: z.string().min(5, "Please enter at least 5 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("✅ Submitted data:", data);
    setMessageSent(true);
    toast.promise<{ name: string }>(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Sent!" }), 2000)
        ),
      {
        loading: "Sending...",
        success: (data) => `${data.name} expect reply within 24hrs`,
        error: "Error",
      }
    );
    // const timer = setTimeout(() => {
    //   console.log("time to move");
    //   router.back();
    // }, 1500);
    // return () => clearTimeout(timer);

    // alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="">
        <div className="w-full max-w-md ">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="La***"
                    {...register("name")}
                    className="h-13 border-2"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="@gmail.com"
                    {...register("email")}
                    className="h-13 border-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Phone Number</FieldLabel>
                  <Input
                    id="tel"
                    type="tel"
                    placeholder="**** *** **00"
                    {...register("tel")}
                    className="h-13 border-2"
                  />
                  {errors.tel && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.tel.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
                  <Textarea
                    id="feedback"
                    //   placeholder="Your feedback helps us improve.."
                    placeholder="Leave us a message...."
                    rows={4}
                    {...register("feedback")}
                    className="border-2"
                  />
                  <FieldDescription className="flex justify-around">
                    {/* <p>
                      <FaWhatsapp /> 0205150909
                    </p> */}
                    <span className="flex items-center gap-1">
                      <BiPhoneCall /> 0205150909
                    </span>
                    <span className="flex items-center gap-1">
                      <AiTwotoneMail /> lawsonsamson22@gmail.com
                    </span>
                  </FieldDescription>
                  {errors.feedback && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.feedback.message}
                    </p>
                  )}
                </Field>
                <Field className="m-auto">
                  {/* <ButtonComp initialText="Send Message">
                    <SendHorizontal />
                  </ButtonComp> */}
                  <Button
                  // onClick={() => {
                  //   if (messageSent) {
                  //     toast.promise<{ name: string }>(
                  //       () =>
                  //         new Promise((resolve) =>
                  //           setTimeout(() => resolve({ name: "Sent!" }), 2000)
                  //         ),
                  //       {
                  //         loading: "Sending...",
                  //         success: (data) =>
                  //           `${data.name} expect reply within 24hrs`,
                  //         error: "Error",
                  //       }
                  //     );
                  //   }
                  // }}
                  >
                    Send Message
                    <RiMailSendLine />
                  </Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default page
