"use client";

import {
  Plus,
  Eye,
  Megaphone,
  FileText,
  Upload,
  BarChart3,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ClickTransition from "../animations/click_transition";

const actions = [
  {
    label: "Register New School",
    icon: Plus,
    variant: "default" as const,
  },
  {
    label: "View All Schools",
    icon: Eye,
    variant: "outline" as const,
  },
  {
    label: "Send Announcement",
    icon: Megaphone,
    variant: "outline" as const,
  },
  {
    label: "Create Course Template",
    icon: FileText,
    variant: "outline" as const,
  },
  {
    label: "Bulk Import",
    icon: Upload,
    variant: "outline" as const,
  },
  {
    label: "Generate Report",
    icon: BarChart3,
    variant: "outline" as const,
  },
];

export function QuickActions() {
  return (
    <div className="bg-card border-none">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
        <CardDescription>Common administrative tasks</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 mt-2">
        {actions.map((action) => (
          // <motion.div
          //   whileHover={{ scale: 1.05 }}
          //   whileTap={{ scale: 0.9 }}
          //   transition={{ type: "spring", stiffness: 300, damping: 15 }}
          //   className="flex flex-col items-center gap-2 text-xs cursor-pointer"
          // >
          <ClickTransition key={action.label}>
            <Button
              key={action.label}
              variant={action.variant}
              className="h-auto w-full py-3 flex flex-col items-center gap-2 text-xs cursor-pointer border"
            >
              <action.icon className="h-5 w-5" />
              <span className="text-center leading-tight">{action.label}</span>
            </Button>
          </ClickTransition>
          // </motion.div>
        ))}
      </CardContent>
    </div>
  );
}
