"use client";
import CardComponent from "@/components/chart_components/cards_component";
import { BarChartCard } from "@/components/chart_components/horizontal-bar-component";
import { PieChartCard } from "@/components/chart_components/pie-chart-components";
import { QuickActions } from "@/components/chart_components/quick_action";
import { RecentActivities } from "@/components/chart_components/recent-activity";

import PageHeader from "@/components/headers/pageHeader";
import TableComponent from "@/components/tables/front_end_table";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTeacherModal } from "@/components/ui_components/add-teacher-model";
import { ProfileDrawer } from "@/components/ui_components/profile-drawer";
import { subjectStats } from "@/lib/barConfig";
import { TeacherCardFeatures } from "@/lib/cardConfig";
import { teachersActivities, teachersQuickActions } from "@/lib/demo";
import { departmentStats } from "@/lib/pieConfig";
import { TeachersTable } from "@/lib/table";
import { Teacher } from "@/lib/types";
import React, { useMemo, useState } from "react";

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
    setSelectedTeacher(teacher);
    setIsDrawerOpen(true);
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

  return (
    <div className="space-y-4 no-scrollbar pb-4">
      <PageHeader
        title="Teacher Management"
        subTitle="Monitor and manage your school's teaching staff"
      />

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <CardComponent features={TeacherCardFeatures} />
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
      <Card className="">
        <QuickActions features={teachersQuickActions} />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <PieChartCard title="Teachers by Department" data={departmentStats} />
        <BarChartCard
          title="Teachers by Subject"
          data={subjectStats.slice(0, 6)}
        />
      </div>

      <RecentActivities activities={teachersActivities} />

      {/* Profile Drawer */}
      <ProfileDrawer
        teacher={selectedTeacher}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onEdit={handleEditTeacher}
        onToggleStatus={handleToggleStatus}
      />

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
