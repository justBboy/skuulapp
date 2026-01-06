"use client";
import PageHeader from "@/components/headers/pageHeader";

import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";

import { QuickActions } from "@/components/quick-action";
import { studentActivities, studentQuickActions } from "@/lib/demo";
import { RecentActivities } from "@/components/recent-activity";
import RecentEnrollment from "@/components/recent-enrollment";
import RankPerformance from "@/components/rank-performance";
import { StudentAreaChart } from "@/components/chart-components/student/area-chart";
import CardComponent from "@/components/chart-components/student/cards-component";
import { StudentMultipleBarChart } from "@/components/chart-components/student/bar-chart";
import { StudentLineChart } from "@/components/chart-components/student/line-chart";
import StudentRankPerformance from "@/components/chart-components/student/rank-performance";

export default function page() {
  const { isMobile } = useSidebar();
  return (
    <div className="space-y-4 pb-4">
      <PageHeader
        title="Student Management"
        subTitle="Monitor and manage students"
      />

      {/* CARD SECTION  */}
      <div className="">
        <CardComponent />
      </div>

      {/* CHART SECTION */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <StudentLineChart />
        </div>
        <div className="">
          <StudentMultipleBarChart />
        </div>
      </div>

      {/* CHART SECTIONS */}
      <div className="">
        <div className="">
          <StudentAreaChart />
        </div>
      </div>

      {/* LAST GRID SECTION */}
      <div
        className={` w-full gap-4 ${
          isMobile ? "grid grid-cols-1" : "grid grid-cols-2"
        }`}
      >
        {/* RIGHT SIDE */}
        <div className="  flex flex-col gap-4">
          <div className="">
            <StudentRankPerformance />
          </div>
          <div className="">
            <RecentEnrollment />
          </div>
          {/* 
          <div className="">
            <SchoolsAttention />
          </div>
          <div className="">
            <SystemHealth />
          </div> */}
        </div>
        {/* LEFT SIDE */}
        {/* <Card className=" gap-8  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickActions features={studentQuickActions} />
            <RecentActivities activities={studentActivities} />
          </div>
        </Card> */}

        <Card className=" gap-8  ">
          <div className="">
            <QuickActions features={studentQuickActions} />
            {/* <QuickActions features={overviewQuickActions} /> */}
          </div>
          <div className="">
            <RecentActivities activities={studentActivities} />
            {/* <ActivityFeed /> */}
          </div>
        </Card>
      </div>
    </div>
  );
}
