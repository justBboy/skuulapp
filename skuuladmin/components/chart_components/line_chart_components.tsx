"use client";

// import { LucideIcon, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
// import { Sprout } from "lucide-react";
import { iconMap } from "@/lib/lineChartConfig";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// import { ForwardRefExoticComponent, RefAttributes } from "react";

export const description = "A linear line chart";

// const chartData = [
//   { month: "January", schools: 186 },
//   { month: "February", schools: 305 },
//   { month: "March", schools: 237 },
//   { month: "April", schools: 73 },
//   { month: "May", schools: 209 },
//   { month: "June", schools: 214 },
// ];

const chartConfig = {
  desktop: {
    label: "Schools",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

type chartData = {
  month: string;
  schools: number;
};
// type chartDetail = {
//   title: string;
//   icon: ForwardRefExoticComponent<
//     Omit<LucideProps, "ref"> & RefAttributes<SVGAElement>
//   >;
// };
// const iconMap: Record<string, LucideIcon> = {
//   Sprout,
//   TrendingUp,
//   // School,
// };

export function LineChartGraph({
  chartData,
  title,
  icon,
}: {
  chartData: chartData[];
  title: string;
  // Icon: ForwardRefExoticComponent<
  //   Omit<LucideProps, "ref"> & RefAttributes<SVGAElement>
  // >;
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
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            // className="border"
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="schools"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
