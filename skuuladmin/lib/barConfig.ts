import { LucideIcon, TrendingUp, Sprout, Landmark  } from "lucide-react";
import { SubjectStats } from "./types";

export const iconMap: Record<string, LucideIcon> = {
    Sprout,
    TrendingUp,
    Landmark 
  };

 export const OverviewBarChartData = [
    { month: "January", amount: 106 },
    { month: "February", amount: 205 },
    { month: "March", amount: 337 },
    { month: "April", amount: 273 },
    { month: "May", amount: 509 },
    { month: "June", amount: 414 },
  ];

  export const subjectStats: SubjectStats[] = [
    { name: "Mathematics", count: 8 },
    { name: "English", count: 7 },
    { name: "Physics", count: 5 },
    { name: "Chemistry", count: 5 },
    { name: "Biology", count: 4 },
    { name: "History", count: 4 },
    { name: "Geography", count: 3 },
    { name: "Computer Science", count: 6 },
    { name: "Art", count: 3 },
    { name: "Music", count: 2 },
    { name: "Physical Education", count: 4 },
    { name: "Economics", count: 3 },
  ]