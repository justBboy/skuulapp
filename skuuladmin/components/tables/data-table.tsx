"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { StudentsRow } from "./students-row";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
// import { StudentsTableData } from "@/lib/table";
import { StudentRow } from "./student-row";
// import { StudentRow2 } from "./students-row";

// Mock data
// const students = [
//   {
//     id: "STU001",
//     name: "Emma Wilson",
//     email: "emma.wilson@school.edu",
//     avatar: "/student-emma.jpg",
//     class: "Grade 10A",
//     progress: 85,
//     status: "active" as const,
//     lastActive: "2 hours ago",
//     avgScore: 88,
//   },
//   {
//     id: "STU002",
//     name: "Liam Martinez",
//     email: "liam.martinez@school.edu",
//     avatar: "/student-liam.jpg",
//     class: "Grade 11B",
//     progress: 72,
//     status: "inactive" as const,
//     lastActive: "5 hours ago",
//     avgScore: 76,
//   },
//   {
//     id: "STU003",
//     name: "Olivia Chen",
//     email: "olivia.chen@school.edu",
//     avatar: "/student-olivia.jpg",
//     class: "Grade 10A",
//     progress: 94,
//     status: "active" as const,
//     lastActive: "1 hour ago",
//     avgScore: 92,
//   },
//   {
//     id: "STU004",
//     name: "Noah Johnson",
//     email: "noah.johnson@school.edu",
//     avatar: "/student-noah.jpg",
//     class: "Grade 12C",
//     progress: 45,
//     status: "inactive" as const,
//     lastActive: "3 days ago",
//     avgScore: 58,
//   },
//   {
//     id: "STU005",
//     name: "Sophia Patel",
//     email: "sophia.patel@school.edu",
//     avatar: "/student-sophia.png",
//     class: "Grade 11A",
//     progress: 0,
//     status: "suspended" as const,
//     lastActive: "1 week ago",
//     avgScore: 42,
//   },
//   {
//     id: "STU006",
//     name: "Jackson Lee",
//     email: "jackson.lee@school.edu",
//     avatar: "/student-jackson.jpg",
//     class: "Grade 10B",
//     progress: 88,
//     status: "suspended" as const,
//     lastActive: "30 mins ago",
//     avgScore: 85,
//   },
//   {
//     id: "STU007",
//     name: "Ava Thompson",
//     email: "ava.thompson@school.edu",
//     avatar: "/student-ava.jpg",
//     class: "Grade 12A",
//     progress: 91,
//     status: "active" as const,
//     lastActive: "1 hour ago",
//     avgScore: 94,
//   },
//   {
//     id: "STU008",
//     name: "Ethan Brown",
//     email: "ethan.brown@school.edu",
//     avatar: "/student-ethan.jpg",
//     class: "Grade 11C",
//     progress: 67,
//     status: "inactive" as const,
//     lastActive: "6 hours ago",
//     avgScore: 71,
//   },
// ];
import { StudentTableDetails } from "@/lib/table";
import { Input } from "../ui/input";

type TableProps<T extends object> = {
  data: T[];
  title: string;
  caption: string;
};

export function StudentsTable<T extends object>({
  data,
  title,
  caption,
}: TableProps<T>) {
  // const safeData = Array.isArray(StudentsTableData) ? StudentsTableData : [];
  // const headerTitle = ["Student", "Student-ID", "Class", "Status"];

  // const hiddenColumns = ["progress", "avgScore", "lastActive"];
  // const headers =
  //   safeData.length > 0
  //     ? Object.keys(safeData[0]).filter((key) => !hiddenColumns.includes(key))
  //     : [];

  //   const headers = Object.keys(data[0] || {}) as (keyof T)[];

  // console.log("headers for student row: ", headers);
  // console.log("data for student : ", StudentsTableData);

  return (
    <Card className="bg-card">
      {/* <CardHeader className="w-full ">
        <div className=" md:flex grid grid-cols-1 justify-between items-center ">
          <div className="">
            <CardTitle className="font-[georgia]">{title}</CardTitle>
            <CardDescription>{caption}</CardDescription>
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-4 relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name or Id..."
                className="pl-10 "
                // onChange={(e) => {
                //   setLocalSearch(e.target.value);
                //   onSearch && onSearch(e.target.value);
                // }}
              />
            </div>
          </div>
        </div>
      </CardHeader> */}
      {/* SEARCH */}
      <div className="overflow-x-auto">
        <Table>
          {/* <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="w-[300px]">Student</TableHead>
              <TableHead>Student ID</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableHeader>
            <TableRow className="font-semibold  ">
              {/* {headers.map((key) => (
                <TableHead
                  key={String(key)}
                  className="cursor-not-allowed font-extrabold capitalize "
                  //   onClick={() => onSort && onSort(key)}
                > */}
              {StudentTableDetails.StudentTableHeader.map((key) => (
                <TableHead
                  key={String(key)}
                  className="cursor-not-allowed font-extrabold capitalize "
                  //   onClick={() => onSort && onSort(key)}
                >
                  {String(key)}
                </TableHead>
              ))}
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {StudentTableDetails.StudentTableData.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
            {/* <StudentRow key={student.id} student={student} /> */}
            {/* <StudentRow2 /> */}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between border-t border-border px-6 py-4">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">1-8</span> of{" "}
          <span className="font-medium text-foreground">1,245</span> students
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
