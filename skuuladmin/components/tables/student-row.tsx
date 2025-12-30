"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudentActions } from "./student-actions";
// import { StudentsTableData } from "@/lib/table";
import { useEffect } from "react";
// import type { StudentRowProps } from "@/lib/types";
import { Separator } from "../ui/separator";

interface StudentRowProps {
  student: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    class: string;
    status: "active" | "inactive" | "suspended";
    lastActive: string;
    avgScore: number;
  };
}

// type TableProps<T extends object> = {
//   data: T[];
//   title: string;
//   caption: string;
// };

export function StudentRow({ student }: StudentRowProps) {
  {
    // const safeData = Array.isArray(data) ? data : [];

    // const hiddenColumns = ["progress", "avgScore", "lastActive"];
    // const headers =
    //   safeData.length > 0
    //     ? Object.keys(safeData[0]).filter((key) => !hiddenColumns.includes(key))
    //     : [];

    // //   const headers = Object.keys(data[0] || {}) as (keyof T)[];

    // console.log("headers for student row: ", headers);
    // console.log("data for student : ", data);
    const statusVariant = {
      active: "default" as const,
      inactive: "secondary" as const,
      suspended: "destructive" as const,
    };

    const statusLabel = {
      active: "Active",
      inactive: "Inactive",
      suspended: "Suspended",
    };

    return (
      <TableRow className="border-border hover:bg-accent/5 w-full">
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={student.avatar || "/placeholder.svg"}
                alt={student.name}
              />
              <AvatarFallback>
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{student.name}</p>
              <p className="text-sm text-muted-foreground">{student.email}</p>
            </div>
          </div>
        </TableCell>
        <TableCell className="font-mono text-sm text-muted-foreground">
          {student.id}
        </TableCell>
        <TableCell className="text-sm text-foreground">
          {student.class}
        </TableCell>
        {/* <TableCell>
          <div className="flex items-center gap-2">
            <Progress value={student.progress} className="h-2 w-24" />
            <span className="text-sm font-medium text-foreground">
              {student.progress}%
            </span>
          </div>
        </TableCell> */}
        <TableCell>
          <Badge variant={statusVariant[student.status]}>
            {statusLabel[student.status]}
          </Badge>
        </TableCell>
        {/* <TableCell className="text-sm text-muted-foreground">
          {student.lastActive}
        </TableCell> */}
        <TableCell className="text-right">
          <StudentActions student={student} />
        </TableCell>
      </TableRow>
    );
  }
}
