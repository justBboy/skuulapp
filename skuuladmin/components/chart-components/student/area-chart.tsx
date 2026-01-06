"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
  { day: "Monday", student: 186 },
  { day: "Tuesday", student: 305 },
  { day: "Wednessday", student: 237 },
  { day: "Thursday", student: 73 },
  { day: "Friday", student: 209 },
  //   { day: "June", student: 214 },
];

const chartConfig = {
  student: {
    label: "Student",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function StudentAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Activity </CardTitle>
        <CardDescription className="text-muted-foreground">
          Showing total number of active students in a week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-56">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            // width={10}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="student"
              type="natural"
              //   fill="var(--color-desktop)"
              fill="violet"
              fillOpacity={0.4}
              //   stroke="var(--color-desktop)"
              stroke="gray"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
