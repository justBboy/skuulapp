"use client";

import {
  School,
  Users,
  DollarSign,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    icon: School,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    message: "St. Paul's Academy added 54 new students",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: Users,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    message: "2 new teachers registered at Sunrise International",
    time: "15 minutes ago",
  },
  {
    id: 3,
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
    message: "Prestige Academy paid GHS 3,500 subscription fee",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: BookOpen,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    message: "New course 'Advanced Mathematics' created by Excel High",
    time: "2 hours ago",
  },
  {
    id: 5,
    icon: GraduationCap,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    message: "Golden Gate College completed student enrollment",
    time: "3 hours ago",
  },
  {
    id: 6,
    icon: School,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    message: "Victory Academy updated their school profile",
    time: "4 hours ago",
  },
  {
    id: 7,
    icon: DollarSign,
    color: "text-success",
    bgColor: "bg-success/10",
    message: "Monthly revenue milestone: GHS 500,000 reached",
    time: "5 hours ago",
  },
  {
    id: 8,
    icon: Users,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    message: "Bulk import: 120 teachers added across 5 schools",
    time: "6 hours ago",
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-card border-none outline-none">
      <CardHeader>
        <CardTitle className="text-foreground">Live System Activity</CardTitle>
        <CardDescription>Real-time updates from all schools</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div
                  className={`h-10 w-10 rounded-full ${activity.bgColor} flex items-center justify-center `}
                >
                  <activity.icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </div>
  );
}
