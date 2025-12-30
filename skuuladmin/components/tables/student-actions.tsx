"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Eye,
  MoreVertical,
  RotateCcw,
  Ban,
  CheckCircle,
  MessageSquare,
  View,
  Pencil,
  UserX,
  Trash2,
} from "lucide-react";

interface StudentActionsProps {
  student: {
    id: string;
    name: string;
    status: "active" | "inactive" | "suspended";
  };
}

export function StudentActions({ student }: StudentActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     onView(row);
        //   }}
        >
          <View className="h-4 w-4 mr-2" /> View
        </DropdownMenuItem>
        <DropdownMenuItem
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     onEdit(row);
        //   }}
        >
          <Pencil className="h-4 w-4 mr-2" /> Edit
        </DropdownMenuItem>
        {/* <DropdownMenuItem
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     onToggleStatus(row);
        //   }}
        > */}
        {/* <UserX className="mr-2 h-4 w-4" /> */}
        {/* {row.status === "active" ? "Disable" : "Enable"} */}
        {student.status === "suspended" ? (
          <DropdownMenuItem className="text-green-600 focus:text-green-600">
            <CheckCircle className="mr-2 h-4 w-4" />
            Activate
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Ban className="mr-2 h-4 w-4" />
            Suspend
          </DropdownMenuItem>
        )}
        {/* </DropdownMenuItem> */}
        <DropdownMenuItem className="text-destructive">
          <Trash2 className="h-4 w-4 mr-2" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/* <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Eye className="mr-2 h-4 w-4" />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset Progress
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare className="mr-2 h-4 w-4" />
          Message Student
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {student.status === "suspended" ? (
          <DropdownMenuItem className="text-green-600 focus:text-green-600">
            <CheckCircle className="mr-2 h-4 w-4" />
            Activate
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Ban className="mr-2 h-4 w-4" />
            Suspend
          </DropdownMenuItem>
        )}
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}
