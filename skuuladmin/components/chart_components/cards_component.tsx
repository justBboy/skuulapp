import { Activity, LucideProps, Merge, MonitorCog, School } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { useSidebar } from "../ui/sidebar";
import ClickTransition from "../animations/click_transition";
// import { cardFeatures } from "@/lib/cardConfig";

type Feature = {
  title: string;
  value: string;
  description: string;
  subtitle: string;
  viewStatus: boolean;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGAElement>
  >;
};

export default function CardComponent({ features }: { features: Feature[] }) {
  //   const cardFeatures = [
  //     {
  //       title: "Total Schools",
  //       description: "Number of schools using the system",
  //       value: "42",
  //       icon: School,
  //       subtitle: "+3 this month",
  //       viewStatus: false,
  //     },
  //     {
  //       title: "Sytem Activities",
  //       value: "89.5 %",
  //       icon: MonitorCog,
  //       subtitle: "+6 this month",
  //       viewStatus: false,
  //     },
  //     {
  //       title: "Most Active",
  //       value: "Lawson Acadamy",
  //       icon: Activity,
  //       subtitle: "+1 this month",
  //       viewStatus: false,
  //     },
  //     {
  //       title: "New Schools Onboarding",
  //       value: "4 New Schools",
  //       icon: Merge,
  //       subtitle: "+9 this month",
  //       viewStatus: true,
  //     },
  //   ];
  const { isMobile } = useSidebar();
  return (
    <>
      {features.map((item) => (
        <Card
          key={item.title}
          className="odd:bg-yellow-50/90 odd:dark:bg-card nth-[2]:border-b-4 nth-[2]:border-b-yellow-500 last:border-b-4 last:border-b-yellow-500 dark:even:border-b-yellow-500 border-0.5 shadow-lg"
        >
          <CardHeader>
            <CardTitle className="font-bold">{item.title}</CardTitle>
            <CardAction>{<item.icon />}</CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 -my-2">
            <p
              className={`font-extrabold text-center  ${
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
            <p className="text-xs">{item.subtitle}</p>

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
    </>
  );
}
