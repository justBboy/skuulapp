"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store";
import PageHeader from "@/components/headers/pageHeader";
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  Mail,
  Pencil,
  Phone,
  Undo2,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  toggleTeacherStatus,
  openEditTeacher,
} from "@/lib/redux/slices/teacherSlice";

export default function Page() {
  const router = useRouter();
  const teacher = useSelector(
    (state: RootState) => state.teacher.selectedTeacher
  );
  const dispatch = useDispatch();

  if (!teacher) {
    return (
      <div className="p-6 text-muted-foreground">No teacher selected.</div>
    );
  }

  return (
    <div className="space-y-4 overflow-y-scroll no-scrollbar mb-3 relative">
      <ChevronLeft
        className="p-0.5 mt-5 -mb-5 cursor-pointer text-muted-foreground rounded-full hover:bg-yellow-400/10 "
        size={30}
        onClick={() => router.back()}
      />
      {/* <div className="flex flex-col">
        <PageHeader
          title={`Teacher / ${teacher.name}`}
          subTitle={`view and manage ${teacher.name}`}
        />
      </div> */}
      {/* <div className="border "></div> */}
      {/* <Separator /> */}

      {/* You can now safely render profile UI here */}
      {/* Header */}
      <div className="flex flex-col items-center gap-4">
        <Avatar className="h-24 w-24">
          <AvatarImage
            src={teacher.avatar || "/placeholder.svg"}
            alt={teacher.name}
          />
          <AvatarFallback className="bg-primary/10 text-primary text-2xl">
            {teacher.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-xl font-semibold">{teacher.name}</h2>
          <p className="text-sm text-muted-foreground">{teacher.department}</p>
        </div>
      </div>

      <Separator />

      {/* Contact */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-muted-foreground" />
          {teacher.email}
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-muted-foreground" />
          {teacher.phone}
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          Joined {new Date(teacher.dateJoined).toLocaleDateString()}
        </div>
      </div>

      <Separator />

      {/* Status */}
      <div className="flex items-center justify-between">
        <div>
          <Label>Status</Label>
          <p className="text-sm text-muted-foreground">
            {teacher.status === "active"
              ? "Teacher is active"
              : "Teacher is inactive"}
          </p>
        </div>
        <Switch
          checked={teacher.status === "active"}
          onCheckedChange={() => dispatch(toggleTeacherStatus(teacher.id))}
          className="cursor-pointer"
        />
      </div>

      <Separator />

      {/* Subjects */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Subjects
        </Label>
        <div className="flex flex-wrap gap-2">
          {teacher.subjects.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>

      {/* Classes */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Classes
        </Label>
        <div className="flex flex-wrap gap-2">
          {teacher.classes.map((c) => (
            <Badge key={c} variant="outline">
              {c}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label>Additional Info</Label>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Gender</p>
            <p className="font-medium capitalize">{teacher.gender}</p>
          </div>
          <div>
            <p className="text-muted-foreground">ID</p>
            <p className="font-medium font-mono">{teacher.id}</p>
          </div>
        </div>
      </div>

      <div className="border">
        <Button
          className="w-full bg-yellow-500/70 hover:bg-yellow-500/80 text-gray-700 border-0 cursor-pointer "
          variant="ghost"
          onClick={() => dispatch(openEditTeacher(teacher))}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Edit Teacher
        </Button>
      </div>
    </div>
  );
}
