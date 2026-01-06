"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardFeatures } from "@/lib/types";
import { GraduationCap, TrendingUp, UserX, Users } from "lucide-react";
import ClickTransition from "@/components/animations/click_transition";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export default function CardComponent() {
  const { isMobile } = useSidebar();
  const cardData: CardFeatures[] = [
    {
      title: "Total Student",
      value: "1,245",
      subtitle: "All Registered",
      viewStatus: false,
      icon: Users,
    },
    {
      title: "Active Student",
      value: "920",
      subtitle: "Logged in last 7 days",
      viewStatus: false,
      icon: TrendingUp,
    },
    {
      title: "Inactive Student",
      value: "325",
      subtitle: "No Activity",
      viewStatus: false,
      icon: UserX,
    },
    {
      title: "Graduated Student",
      value: "73",
      subtitle: "Completed",
      viewStatus: false,
      icon: GraduationCap,
    },
  ];
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      {cardData.map((item) => (
        <Card
          key={item.title}
          className="first:border-b-blue-300 nth-[2]:border-b-orange-300 nth-[3]:border-b-emerald-300 last:border-b-fuchsia-300"
        >
          <CardHeader>
            <CardTitle className="font-bold">{item.title}</CardTitle>
            <CardAction>{<item.icon />}</CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 -my-2">
            <p
              className={`font-black text-start font-mono text-yellow-700 dark:text-yellow-500  ${
                isMobile ? "text-lg" : "text-xl"
              }`}
            >
              {item.value}
            </p>

            {/* <span><Badge variant="outline">hi</Badge></span> */}
          </CardContent>
          <CardFooter
            className={`-my-2 ${
              isMobile ? " flex flex-col" : "flex justify-between "
            }`}
          >
            <p className="text-xs text-muted-foreground">{item.subtitle}</p>

            {item.viewStatus ? (
              <ClickTransition>
                <Button
                  variant={"outline"}
                  className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 w-full"
                >
                  View
                </Button>
              </ClickTransition>
            ) : (
              ""
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
