"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card";
import {
  Search,
  MoreHorizontal,
  Pencil,
  View,
  Trash2,
  UserX,
} from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FiltersBar } from "../chart_components/filters-bar";
import { Teacher } from "@/lib/types";

type GenericObject = Record<string, any>;

export default function TableComponent({
  tableCellsData,
  title,
  caption,
  showFilter,
  setShowFilter,
  onToggleStatus,
  // filter props from parent
  searchQuery,
  setSearchQuery,
  subjectFilter,
  setSubjectFilter,
  classFilter,
  setClassFilter,
  statusFilter,
  setStatusFilter,
  departmentFilter,
  setDepartmentFilter,
  onClearFilters,
  onView,
  onEdit,
}: {
  tableCellsData: Teacher[];
  title: string;
  caption: string;
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleStatus: (row: Teacher) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  subjectFilter: string;
  setSubjectFilter: React.Dispatch<React.SetStateAction<string>>;
  classFilter: string;
  setClassFilter: React.Dispatch<React.SetStateAction<string>>;
  statusFilter: string;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  departmentFilter: string;
  setDepartmentFilter: React.Dispatch<React.SetStateAction<string>>;
  onClearFilters: () => void;
  onView: (row: Teacher) => void;
  onEdit: (row: Teacher) => void;
}) {
  const safeData = Array.isArray(tableCellsData) ? tableCellsData : [];

  const hiddenColumns = ["subjects", "classes", "gender"];
  const headers =
    safeData.length > 0
      ? Object.keys(safeData[0]).filter((key) => !hiddenColumns.includes(key))
      : [];

  // const headers = safeData.length > 0 ? Object.keys(safeData[0]) : [];

  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const baseRows = useMemo(() => safeData, [safeData]);

  const sortedRows = useMemo(() => {
    if (!sortKey) return baseRows;
    return [...baseRows].sort((a, b) => {
      const valA = a[sortKey as keyof Teacher];
      const valB = b[sortKey as keyof Teacher];

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }
      return sortOrder === "asc"
        ? String(valA ?? "").localeCompare(String(valB ?? ""))
        : String(valB ?? "").localeCompare(String(valA ?? ""));
    });
  }, [baseRows, sortKey, sortOrder]);

  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(sortedRows.length / rowsPerPage));
  const paginatedRows = sortedRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder((s) => (s === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="overflow-x-scroll min-w-full">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{caption}</CardDescription>
        </CardHeader>

        <div className="flex gap-4 px-5 pb-4">
          {showFilter ? (
            <div className="w-full">
              <FiltersBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                subjectFilter={subjectFilter}
                onSubjectFilterChange={setSubjectFilter}
                classFilter={classFilter}
                onClassFilterChange={setClassFilter}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                departmentFilter={departmentFilter}
                onDepartmentFilterChange={setDepartmentFilter}
                onClearFilters={onClearFilters}
              />
            </div>
          ) : (
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setPage(1);
                  setSearchQuery(e.target.value);
                }}
                className="pl-10"
              />
            </div>
          )}
        </div>

        <Table>
          <TableHeader>
            <TableRow className="*:text-sm *:font-bold cursor-pointer select-none">
              {headers.map((header) => (
                <TableHead
                  key={header}
                  onClick={() => handleSort(header)}
                  className="capitalize"
                >
                  {header}
                  {sortKey === header && (sortOrder === "asc" ? " ↑" : " ↓")}
                </TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-xs">
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={headers.length + 1}
                  className="text-center py-10 text-muted-foreground "
                >
                  No matching records found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row) => (
                <TableRow
                  key={row.id ?? JSON.stringify(row)}
                  className="cursor-pointer"
                  onClick={() => onView(row)}
                >
                  {headers.map((header) => (
                    <TableCell key={header}>
                      {header === "status" ? (
                        <Badge
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            row.status === "active"
                              ? "!bg-green-500/20 !text-green-600"
                              : "bg-yellow-500/20 text-yellow-600"
                          }`}
                        >
                          {row.status}
                        </Badge>
                      ) : // handle arrays (subjects/classes) gracefully
                      Array.isArray(row[header]) ? (
                        (row[header] as any[]).join(", ")
                      ) : (
                        String(row[header] ?? "-")
                      )}
                    </TableCell>
                  ))}

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            onView(row);
                          }}
                        >
                          <View className="h-4 w-4 mr-2" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            onEdit(row);
                          }}
                        >
                          <Pencil className="h-4 w-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleStatus(row);
                          }}
                        >
                          <UserX className="mr-2 h-4 w-4" />
                          {row.status === "active" ? "Disable" : "Enable"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center px-6 py-4 text-sm">
          <span className="text-muted-foreground">
            Page {page} of {pageCount}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page === pageCount}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
