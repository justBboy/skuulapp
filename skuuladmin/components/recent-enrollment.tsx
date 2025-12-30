import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentAddedSchool } from "@/lib/demo";
export default function RecentEnrollment() {
  return (
    <div>
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Recent Enrollments</CardTitle>
          <CardDescription>Latest schools registrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {RecentAddedSchool.map((element) => (
              <div
                key={element.id}
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-yellow-600">
                    {element.schoolName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {element.email}
                  </p>
                </div>

                <span className="text-xs text-muted-foreground">
                  {element.joined}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
