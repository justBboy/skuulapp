"use client";
import CardComponent from "@/components/chart-components/cards-component";
import { BarChartCard } from "@/components/chart-components/horizontal-bar-chart";
import { PieChartCard } from "@/components/chart-components/pie-chart";
import PageHeader from "@/components/headers/pageHeader";
import { QuickActions } from "@/components/quick-action";
import { RecentActivities } from "@/components/recent-activity";
import { Card } from "@/components/ui/card";
import { subjectStats } from "@/lib/barConfig";
import { TeacherCardFeatures } from "@/lib/cardConfig";
import { teachersActivities, teachersQuickActions } from "@/lib/demo";
import { departmentStats } from "@/lib/pieConfig";
import React from "react";

export default function page() {
  return (
    <div className="space-y-4 no-scrollbar pb-4">
      <PageHeader
        title="Teacher Management"
        subTitle="Monitor and manage your school's teaching staff"
      />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <CardComponent features={TeacherCardFeatures} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <PieChartCard title="Teachers by Department" data={departmentStats} />
        <BarChartCard
          title="Teachers by Subject"
          data={subjectStats.slice(0, 6)}
        />
      </div>
      <Card className="">
        <QuickActions features={teachersQuickActions} />
      </Card>
      <Card>
        <RecentActivities activities={teachersActivities} />
      </Card>
    </div>
  );
}
