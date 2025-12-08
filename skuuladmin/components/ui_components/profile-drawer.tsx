"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Calendar, BookOpen, Users, Pencil } from "lucide-react";
import type { Teacher } from "@/lib/types";

interface ProfileDrawerProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (teacher: Teacher) => void;
  onToggleStatus: (teacher: Teacher) => void;
}

export function ProfileDrawer({
  teacher,
  isOpen,
  onClose,
  onEdit,
  onToggleStatus,
}: ProfileDrawerProps) {
  if (!teacher) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="space-y-4 pb-6">
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
              <SheetTitle className="text-xl">{teacher.name}</SheetTitle>
              <p className="text-sm text-muted-foreground">
                {teacher.department}
              </p>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{teacher.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{teacher.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Joined{" "}
                {new Date(teacher.dateJoined).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Status</Label>
              <p className="text-sm text-muted-foreground">
                {teacher.status === "active"
                  ? "Teacher is active"
                  : "Teacher is inactive"}
              </p>
            </div>
            <Switch
              checked={teacher.status === "active"}
              onCheckedChange={() => onToggleStatus(teacher)}
            />
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <Label>Subjects</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {teacher.subjects.map((subject) => (
                <Badge key={subject} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <Label>Assigned Classes</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {teacher.classes.map((cls) => (
                <Badge key={cls} variant="outline">
                  {cls}
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

          <Button className="w-full" onClick={() => onEdit(teacher)}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Teacher
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
