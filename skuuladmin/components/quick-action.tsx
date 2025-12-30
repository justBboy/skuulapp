"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ClickTransition from "./animations/click_transition";
import { QuickActionFeatures } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AddTeacherModal } from "./add-teacher-model";
import { useState } from "react";

// const actions = [
//   {
//     label: "Register New School",
//     icon: Plus,
//     variant: "default" as const,
//   },
//   {
//     label: "View All Schools",
//     icon: Eye,
//     variant: "outline" as const,
//   },
//   {
//     label: "Send Announcement",
//     icon: Megaphone,
//     variant: "outline" as const,
//   },
//   {
//     label: "Create Course Template",
//     icon: FileText,
//     variant: "outline" as const,
//   },
//   {
//     label: "Bulk Import",
//     icon: Upload,
//     variant: "outline" as const,
//   },
//   {
//     label: "Generate Report",
//     icon: BarChart3,
//     variant: "outline" as const,
//   },
// ];

export function QuickActions({
  features,
}: {
  features: QuickActionFeatures[];
}) {
  const router = useRouter();
  const [isNewTeacherModalOpen, setIsNewTeacherModalOpen] = useState(false);

  return (
    <div className="bg-card border-none">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
        <CardDescription>Common administrative tasks</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 mt-2">
        {features.map((action) => (
          // <motion.div
          //   whileHover={{ scale: 1.05 }}
          //   whileTap={{ scale: 0.9 }}
          //   transition={{ type: "spring", stiffness: 300, damping: 15 }}
          //   className="flex flex-col items-center gap-2 text-xs cursor-pointer"
          // >
          <ClickTransition key={action.label}>
            {/* <Link href={action.href}> */}
            <Button
              key={action.label}
              variant={action.variant}
              className="h-auto w-full py-3 flex flex-col items-center gap-2 text-xs cursor-pointer border"
              // onClick={router.push(action.href)}
              onClick={() => setIsNewTeacherModalOpen(true)}
            >
              <action.icon className="h-5 w-5" />
              <span className="text-center leading-tight">{action.label}</span>
            </Button>
            {/* </Link> */}
          </ClickTransition>
          // </motion.div>
        ))}
      </CardContent>

      <div className="">
        <AddTeacherModal isOpen={isNewTeacherModalOpen} />
      </div>
    </div>
  );
}
