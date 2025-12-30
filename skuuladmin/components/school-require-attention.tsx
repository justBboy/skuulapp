"use client";

import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SchoolsAttentionData } from "@/lib/demo";

const issueColors: Record<string, string> = {
  pending: "bg-amber-500/10 text-yellow-600 border-amber-500/20",
  payment: "bg-destructive/10 text-red-500 border-destructive/20",
  suspended: "bg-destructive/10 text-red-500 border-destructive/20",
};

export function SchoolsAttention() {
  return (
    <div className="">
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-foreground">
              Schools Requiring Attention
            </CardTitle>
          </div>
          <CardDescription>Issues that need immediate action</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {SchoolsAttentionData.map((school) => (
            <div
              key={school.name}
              className="flex items-start gap-4 p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground">{school.name}</p>
                  <Badge variant="outline" className={issueColors[school.type]}>
                    {school.issue}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {school.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
