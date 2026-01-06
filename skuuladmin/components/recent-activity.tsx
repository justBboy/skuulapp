import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, UserCog, ToggleRight, Users } from "lucide-react";
import type { ActivityLog } from "@/lib/types";

interface RecentActivitiesProps {
  activities: ActivityLog[];
  //   name: string;
}

const getActivityIcon = (type: ActivityLog["type"]) => {
  switch (type) {
    case "added":
      return UserPlus;
    case "updated":
      return UserCog;
    case "status_change":
      return ToggleRight;
    case "assignment":
      return Users;
    default:
      return UserCog;
  }
};

const getActivityColor = (type: ActivityLog["type"]) => {
  switch (type) {
    case "added":
      return "!bg-green-500/10 !text-green-500";
    case "updated":
      return "!bg-indigo-600/10 !text-indigo-600";
    case "status_change":
      return "!bg-amber-500/10 !text-warning-foreground";
    case "assignment":
      return "!bg-chart-3/10 text-chart-3";
    default:
      return "!bg-muted text-muted-foreground";
  }
};

export function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <div className="bg-card border-none">
      <CardHeader>
        <CardTitle className="text-base">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            const colorClass = getActivityColor(activity.type);
            const timestamp = new Date(activity.timestamp);

            return (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${colorClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs  md:text-sm font-medium">
                    {activity.action}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activity.name}
                    {/* {name} */}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground">
                    {timestamp.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-xs md:text-xs text-muted-foreground">
                    {timestamp.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </div>
  );
}
