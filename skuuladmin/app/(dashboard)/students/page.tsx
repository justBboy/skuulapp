import PageHeader from "@/components/headers/pageHeader";
import React from "react";

export default function page() {
  return (
    <div className="space-y-4 pb-4">
      <PageHeader
        title="Student Management"
        subTitle="Monitor and manage students"
      />
    </div>
  );
}
