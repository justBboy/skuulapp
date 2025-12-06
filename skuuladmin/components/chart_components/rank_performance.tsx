"use client";

import { Trophy, TrendingUp, TrendingDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { TopPerformingSchools } from "@/lib/demo";

export default function RankPerformance() {
  return (
    <div>
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-foreground">
              Top Performing Schools
            </CardTitle>
          </div>
          <CardDescription>
            Based on student activity, attendance & results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {TopPerformingSchools.map((school, index) => (
            <div
              key={school.name}
              className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 font-bold">
                #{index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground truncate">
                    {school.name}
                  </p>
                  {school.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                  <span>{school.students.toLocaleString()} students</span>
                  <span>{school.attendance}% attendance</span>
                </div>
                <div className="mt-2">
                  <Progress
                    value={school.score}
                    className="h-2 bg-gray-100 [&>div]:bg-blue-500"
                  />
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">
                  {school.score}
                </span>
                <p className="text-xs text-muted-foreground">score</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
