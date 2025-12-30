"use client";

import TableComponent from "@/components/tables/dynamic-table";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTeacherModal } from "@/components/add-teacher-model";
import { ProfileDrawer } from "@/components/profile-drawer";

import { TeachersTable } from "@/lib/table";
import { Teacher } from "@/lib/types";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ViewProfileComponent } from "@/components/view-profile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setSelectedTeacher as setTeacherAction } from "@/lib/redux/slices/teacherSlice";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import ClickTransition from "@/components/animations/click_transition";

export default function page() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFilter, setShowFilter] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>(TeachersTable);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleToggleStatus = (row: Teacher) => {
    setTeachers((prev) =>
      prev.map((t) =>
        t.id === row.id
          ? { ...t, status: t.status === "active" ? "inactive" : "active" }
          : t
      )
    );
    if (selectedTeacher?.id === row.id) {
      setSelectedTeacher((prev) =>
        prev
          ? {
              ...prev,
              status: prev.status === "active" ? "inactive" : "active",
            }
          : null
      );
    }
  };

  const filteredTeachers = useMemo(() => {
    return teachers.filter((t) => {
      if (activeTab === "active" && t.status !== "active") return false;
      if (activeTab === "inactive" && t.status !== "inactive") return false;

      if (statusFilter !== "all" && t.status !== statusFilter) return false;

      if (departmentFilter !== "all" && t.department !== departmentFilter)
        return false;

      if (subjectFilter !== "all" && !t.subjects.includes(subjectFilter))
        return false;

      if (classFilter !== "all" && !t.classes.includes(classFilter))
        return false;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          t.name.toLowerCase().includes(q) ||
          t.email.toLowerCase().includes(q) ||
          (t.phone && String(t.phone).toLowerCase().includes(q));
        if (!matches) return false;
      }

      return true;
    });
  }, [
    teachers,
    activeTab,
    searchQuery,
    subjectFilter,
    classFilter,
    statusFilter,
    departmentFilter,
  ]);
  const handleClearFilters = () => {
    setSearchQuery("");
    setSubjectFilter("all");
    setClassFilter("all");
    setStatusFilter("all");
    setDepartmentFilter("all");
  };

  const handleViewTeacher = (teacher: Teacher) => {
    dispatch(setTeacherAction(teacher));
    router.push("/subPages/viewProfile");
    console.log("View teacher:", teacher);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setIsModalOpen(true);
    setIsDrawerOpen(false);
  };

  const handleAddOrUpdateTeacher = (
    data: Omit<Teacher, "id" | "dateJoined">
  ) => {
    if (editingTeacher) {
      setTeachers((prev) =>
        prev.map((t) => (t.id === editingTeacher.id ? { ...t, ...data } : t))
      );
    } else {
      const newTeacher: Teacher = {
        ...data,
        id: String(Date.now()),
        dateJoined: new Date().toISOString().split("T")[0],
      };
      setTeachers((prev) => [newTeacher, ...prev]);
    }
    setIsModalOpen(false);
    setEditingTeacher(null);
  };

  const teacher = useSelector(
    (state: RootState) => state.teacher.selectedTeacher
  );

  if (!teacher) {
    return (
      <div className="p-6 text-muted-foreground">No teacher selected.</div>
    );
  }
  return (
    <div className="space-y-4 no-scrollbar pb-4">
      <div className=" mt-8  h-15 flex items-center justify-between">
        <span className="">
          <h1 className="text-xl md:text-3xl font-bold text-foreground leading-3">
            <p>All Teachers</p>
          </h1>
          <h1 className="text-xs md:text-sm text-muted-foreground mt-2">
            <p>complete teachers directory</p>
          </h1>
        </span>
        <span>
          <ClickTransition>
            <Button
              variant={"outline"}
              className="rounded-xl cursor-pointer bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-gray-700 hover:bg-yellow-500 text-gray-800"
            >
              <UserPlus />
              <p>Add Student</p>
            </Button>
          </ClickTransition>
        </span>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="*:cursor-pointer">
          <TabsTrigger value="all">All Teachers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
      </Tabs>
      <div>
        <TableComponent
          title="All Teachers"
          tableCellsData={filteredTeachers}
          caption="Complete teachers directory"
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          onToggleStatus={handleToggleStatus}
          // pass down filter state & setters so FiltersBar inside the table can control them
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          subjectFilter={subjectFilter}
          setSubjectFilter={setSubjectFilter}
          classFilter={classFilter}
          setClassFilter={setClassFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          onClearFilters={handleClearFilters}
          onView={handleViewTeacher}
          onEdit={handleEditTeacher}
        />
      </div>

      <ProfileDrawer
        teacher={selectedTeacher}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onEdit={handleEditTeacher}
        onToggleStatus={handleToggleStatus}
      />
      {/* VIEW PROFILE */}
      {/* <ViewProfile
        teacher={selectedTeacher}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onEdit={handleEditTeacher}
        onToggleStatus={handleToggleStatus}
      /> */}
      {/* <ViewProfileComponent
        teacher={selectedTeacher}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onEdit={handleEditTeacher}
        onToggleStatus={handleToggleStatus}
      /> */}
      {/* Add/Edit Teacher Modal */}
      <AddTeacherModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTeacher(null);
        }}
        onSubmit={handleAddOrUpdateTeacher}
        editingTeacher={editingTeacher}
      />
    </div>
  );
}
