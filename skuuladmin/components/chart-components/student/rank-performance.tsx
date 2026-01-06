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
// import { TopPerformingSchools } from "@/lib/demo";

const TopPerformingStudent = [
  {
    name: "Lawson Samson",
    score: 98,
    class: "3b",
    attendance: 98,
    trend: "up",
  },
  {
    name: "Gideon Asare",
    score: 94,
    class: "5b",
    attendance: 96,
    trend: "up",
  },
  {
    name: "Yaw Tutu",
    score: 89,
    class: "2a",
    attendance: 99,
    trend: "down",
  },
];
export default function StudentRankPerformance() {
  return (
    <div>
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-foreground">
              Top Performing Student
            </CardTitle>
          </div>
          <CardDescription>
            Based on student activity, attendance & results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {TopPerformingStudent.map((student, index) => (
            <div
              key={student.name}
              className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 font-bold">
                #{index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground truncate">
                    {student.name}
                  </p>
                  {student.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                  <span>class {student.class.toLocaleString()} </span>
                  <span>{student.attendance}% attendance</span>
                </div>
                <div className="mt-2">
                  <Progress
                    value={student.score}
                    className="h-2 bg-gray-100 [&>div]:bg-blue-500"
                  />
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">
                  {student.score}
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
