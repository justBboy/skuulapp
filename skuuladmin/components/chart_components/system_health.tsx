"use client";

import {
  Activity,
  Server,
  Mail,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SystemHealthData } from "@/lib/demo";

const statusConfig: Record<
  string,
  { color: string; icon: typeof CheckCircle2 }
> = {
  operational: {
    color: "bg-green-500/10 text-green-600 border-green500/20",
    icon: CheckCircle2,
  },
  degraded: {
    color: "bg-amber-500/10 text-yellow-600 border-amber-500/20",
    icon: AlertCircle,
  },
  down: {
    color: "bg-destructive/10 text-red-500 border-destructive/20",
    icon: AlertCircle,
  },
};

export function SystemHealth() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-amber-500" />
          System Health
        </CardTitle>
        <CardDescription>Service status & uptime</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {SystemHealthData.map((service) => {
          const config = statusConfig[service.status];
          const StatusIcon = config.icon;
          return (
            <div
              key={service.name}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border"
            >
              <div className="flex items-center gap-3">
                <service.icon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {service.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {service.uptime} uptime
                  </p>
                </div>
              </div>
              <Badge variant="outline" className={config.color}>
                <StatusIcon className="h-3 w-3 mr-1" />
                {service.status}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
