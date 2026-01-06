"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { day: "Monday", active: 240, inactive: 20 },
  { day: "Tuesday", active: 320, inactive: 35 },
  { day: "Wednessday", active: 280, inactive: 28 },
  { day: "Thursday", active: 380, inactive: 40 },
  { day: "Friday", active: 420, inactive: 45 },
  // { day: "Sat", active: 280, inactive: 25 },
  // { day: "Sun", active: 310, inactive: 32 },
];

const chartConfig = {
  active: {
    label: "Active",
    color: "violet",
  },
  inactive: {
    label: "Inactive",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function StudentLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className=" py-0 -my-5">
        <ChartContainer config={chartConfig} className=" w-full h-48 p-0 m-0">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="active"
              type="monotone"
              stroke="var(--color-active)"
              strokeWidth={5}
              dot={false}
            />
            <Line
              dataKey="inactive"
              type="monotone"
              stroke="var(--color-inactive)"
              strokeWidth={5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
