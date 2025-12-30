"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import { TeacherForm } from "./teacher-form";
import { TeacherForm } from "./forms/teachers-form";
import type { Teacher } from "@/lib/types";

interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Teacher, "id" | "dateJoined">) => void;
  editingTeacher?: Teacher | null;
}

export function AddTeacherModal({
  isOpen,
  onClose,
  onSubmit,
  editingTeacher,
}: AddTeacherModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editingTeacher ? "Edit Teacher" : "Add New Teacher"}
          </DialogTitle>
        </DialogHeader>
        <TeacherForm
          mode={editingTeacher ? "edit" : "add"}
          initialData={editingTeacher || undefined}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
}
