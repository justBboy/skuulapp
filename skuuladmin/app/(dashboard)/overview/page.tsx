"use client";
import { OverviewCardFeatures } from "@/lib/cardConfig";
import CardComponent from "@/components/chart-components/cards-component";
import PageHeader from "@/components/headers/pageHeader";
import { LineChartGraph } from "@/components/chart-components/line-chart";
import { OverviewLineChartData } from "@/lib/lineChartConfig";
import BarChartGraph from "@/components/chart-components/bar-chart";
import { OverviewBarChartData } from "@/lib/barConfig";
import TableComponent from "@/components/tables/dynamic-table";
import { OverviewSchoolTable } from "@/lib/table";
// import { StudentsTable } from "@/lib/table";
import { DynamicTable } from "@/components/tables/overView-table";

import { ActivityFeed } from "@/components/activity_feeds";
import { SchoolsAttention } from "@/components/school-require-attention";
import RankPerformance from "@/components/rank-performance";
import RecentEnrollment from "@/components/recent-enrollment";
import { QuickActions } from "@/components/quick-action";
import { SystemHealth } from "@/components/system-health";
import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { overviewQuickActions } from "@/lib/demo";
// import { Sprout } from "lucide-react";

export default function OverviewPage() {
  // const cardFeatures = [
  //   {
  //     title: "Total Schools",
  //     description: "Number of schools using the system",
  //     value: "42",
  //     icon: School,
  //     subtitle: "+3 this month",
  //     viewStatus: false,
  //   },
  //   {
  //     title: "Sytem Activities",
  //     value: "89.5 %",
  //     icon: MonitorCog,
  //     subtitle: "+6 this month",
  //     viewStatus: false,
  //   },
  //   {
  //     title: "Most Active",
  //     value: "Lawson Acadamy",
  //     icon: Activity,
  //     subtitle: "+1 this month",
  //     viewStatus: false,
  //   },
  //   {
  //     title: "New Schools Onboarding",
  //     value: "4 New Schools",
  //     icon: Merge,
  //     subtitle: "+9 this month",
  //     viewStatus: true,
  //   },
  // ];

  // const tableCellsData = {
  //   id: number;
  //   schoolName: string;
  //   adminName: string;
  //   email: string;
  //   region: string;
  //   dateJoined: string;
  //   status: string;
  // };

  const { isMobile } = useSidebar();
  return (
    <div className="space-y-4 no-scrollbar pb-4">
      <div className="">
        <PageHeader
          title="Dashboard"
          subTitle=" Welcome back! Here's an overview of your school."
        />
      </div>

      {/* CARD FEATURES */}

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {/* {cardFeatures.map((item) => (
          <Card
            key={item.title}
            className="odd:bg-yellow-50 nth-[2]:border-b-4 nth-[2]:border-b-yellow-500 border-0.5"
          >
            <CardHeader>
              <CardTitle className="font-bold">{item.title}</CardTitle>
              <CardAction>{<item.icon />}</CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 -my-2">
              <p className="text-2xl font-extrabold text-center">
                {item.value}
              </p>
            </CardContent>
            <CardFooter className=" flex justify-between -my-2">
              <p className="text-xs">{item.subtitle}</p>

              {item.viewStatus ? (
                <Button
                  variant={"outline"}
                  className="cursor-pointer bg-yellow-400 hover:bg-yellow-500"
                >
                  View
                </Button>
              ) : (
                ""
              )}
            </CardFooter>
          </Card>
        ))} */}
        <CardComponent features={OverviewCardFeatures} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="" id="lineChart">
          {/* <span className="flex items-center">
            <Sprout />
            <h1 className="font-bold">School Growth</h1>
          </span> */}
          <LineChartGraph
            chartData={OverviewLineChartData}
            title="School Growth"
            icon="Sprout"
          />
        </div>
        <div className="" id="barchart">
          {/* <LineChartGraph
            chartData={OverviewLineChartData}
            title="System Growth"
            icon="TrendingUp"
          /> */}
          <BarChartGraph
            chartData={OverviewBarChartData}
            title="Monthly Transaction"
            icon="Landmark"
          />
        </div>
      </div>

      {/* THE FRONT END CONTROLED TABLE */}
      {/* <div className="">
        <TableComponent
          // tableheads={OverviewSchoolTableHeader}
          title="All Schools"
          caption="Complete schools directory"
          description=" list of schools."
          tableCellsData={StudentsTable}
        />
      </div> */}
      <div>
        <DynamicTable
          data={OverviewSchoolTable}
          title="All Schools"
          caption="Complete schools directory"
          page={1}
          pageSize={5}
          total={OverviewSchoolTable.length}
          onSearch={(value) => console.log("Search:", value)}
          onSort={(key) => console.log("Sort by:", key)}
          onPageChange={(page) => console.log("New page:", page)}
        />
      </div>

      {/* LAST SECTION */}
      <div
        className={` w-full gap-4 ${
          isMobile ? "grid grid-cols-1" : "grid grid-cols-2"
        }`}
      >
        {/* RIGHT SIDE */}
        <div className="  flex flex-col gap-4">
          <div className="">
            <RecentEnrollment />
          </div>
          <div className="">
            <RankPerformance />
          </div>
          <div className="">
            <SchoolsAttention />
          </div>
          <div className="">
            <SystemHealth />
          </div>
        </div>
        {/* LEFT SIDE */}
        <Card className=" gap-8  ">
          <div className="">
            <QuickActions features={overviewQuickActions} />
          </div>
          <div className="h-fit">
            <ActivityFeed />
          </div>
        </Card>
      </div>
    </div>
  );
}
