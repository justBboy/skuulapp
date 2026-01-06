"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", low: 86, average: 80, high: 20 },
  { month: "Feburary", low: 16, average: 80, high: 20 },
  { month: "March", low: 29, average: 90, high: 76 },
  { month: "April", low: 80, average: 30, high: 80 },
  { month: "May", low: 92, average: 50, high: 40 },
  { month: "June", low: 43, average: 70, high: 50 },
];

const chartConfig = {
  low: {
    label: "Low",
    color: "var(--chart-1)",
  },
  average: {
    label: "Average",
    color: "orange",
  },
  high: {
    label: "High",
    color: "lime",
  },
} satisfies ChartConfig;

export function StudentMultipleBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Distribution</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className=" py-0 -my-5">
        <ChartContainer config={chartConfig} className=" w-full h-48 p-0 m-0">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="low" fill="var(--color-low)" radius={4} />
            <Bar dataKey="average" fill="var(--color-average)" radius={4} />
            <Bar dataKey="high" fill="var(--color-high)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
