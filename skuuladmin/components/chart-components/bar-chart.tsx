"use client";
import React from "react";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { iconMap } from "@/lib/barConfig";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
// ];

const chartConfig = {
  desktop: {
    label: "amount",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

type chartData = {
  month: string;
  amount: number;
};

export default function BarChartGraph({
  chartData,
  title,
  icon,
}: {
  chartData: chartData[];
  title: string;
  icon: string;
}) {
  const Icon = iconMap[icon]; // Convert string → Component
  return (
    <Card>
      <CardContent>
        <CardTitle>
          <span className="flex items-center gap-2">
            {Icon && (
              <Icon
                strokeWidth={2}
                className="w-8 h-8 p-1 bg-yellow-50 ring ring-yellow-100 text-yellow-500 rounded-full"
              />
            )}
            <h1 className="font-bold">{title}</h1>
          </span>
        </CardTitle>
        <ChartContainer config={chartConfig}>
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
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
