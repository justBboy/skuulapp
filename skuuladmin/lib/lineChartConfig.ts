import { LucideIcon, TrendingUp, Sprout  } from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
    Sprout,
    TrendingUp,
    // School,
  };

export const OverviewLineChartData = [
    { month: "January", schools: 16 },
    { month: "February", schools: 35 },
    { month: "March", schools: 39 },
    { month: "April", schools: 73 },
    { month: "May", schools: 88 },
    { month: "June", schools: 94 },
    // { month: "July", schools: 104 },
     
  ];


//   export function LineChartGraph({
//     chartData,
//     title,
//     icon,
//   }: {
//     chartData: chartData[];
//     title: string;
 
//     icon: string;
//   }) {
//     const Icon = iconMap[icon]; // Convert string → Component