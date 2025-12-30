import ClickTransition from "@/components/animations/click_transition";
import PageHeader from "@/components/headers/pageHeader";
import { StudentsTable } from "@/components/tables/data-table";
import { DynamicTable } from "@/components/tables/overView-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StudentTableDetails } from "@/lib/table";
import { Plus, Search, UserPlus } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="space-y-4 no-scrollbar pb-4">
      <PageHeader
        title="Student Management"
        subTitle="Monitor and manage your school's student staff"
      />

      <div className="flex justify-between items-center">
        {/* <div className="flex items-center justify-between border w-full"> */}
        <div className="mt-4 relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search student by name or Id..."
            className="pl-10 "
          />
          {/* </div> */}
        </div>
        <ClickTransition>
          <Button
            variant={"outline"}
            className="rounded-xl cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            <UserPlus />
            <p>Add Student</p>
          </Button>
        </ClickTransition>
      </div>
      <div className="">
        {/* <DynamicTable
          data={StudentsTableData}
          title="All Schools"
          caption="Complete schools directory"
          // page={1}
          // pageSize={2}
          // total={StudentsTableData.length}
          // onSearch={(value) => console.log("Search:", value)}
          // onSort={(key) => console.log("Sort by:", key)}
          // onPageChange={(page) => console.log("New page:", page)}
        /> */}
        <StudentsTable
          data={StudentTableDetails.StudentTableData}
          title=""
          caption=""
        />
      </div>
    </div>
  );
}
