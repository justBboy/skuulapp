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
import { Search, MoreHorizontal, Pencil, View, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type GenericObject = Record<string, any>;

export default function TableComponent({
  tableCellsData,
  title,
  caption,
  description,
}: {
  tableCellsData: GenericObject[];
  title: string;
  caption: string;
  description: string;
}) {
  const headers = Object.keys(tableCellsData[0] || {});

  // ------------------------------
  // 🔍 SEARCH
  // ------------------------------
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = useMemo(() => {
    if (!searchQuery) return tableCellsData;

    return tableCellsData.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableCellsData]);

  // ------------------------------
  // ↕ SORTING
  // ------------------------------
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedRows = useMemo(() => {
    if (!sortKey) return filteredRows;

    return [...filteredRows].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];

      if (typeof valA === "number" && typeof valB === "number") {
        return sortOrder === "asc" ? valA - valB : valB - valA;
      }

      return sortOrder === "asc"
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [filteredRows, sortKey, sortOrder]);

  // ------------------------------
  // 📄 PAGINATION
  // ------------------------------
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(sortedRows.length / rowsPerPage);
  const paginatedRows = sortedRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{caption}</CardDescription>
      </CardHeader>

      {/* SEARCH */}
      <div className="flex gap-4 px-5 pb-4">
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
      </div>

      <Table>
        {/* HEADER */}
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

        {/* BODY */}
        <TableBody>
          {paginatedRows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={headers.length + 1}
                className="text-center py-10 text-muted-foreground"
              >
                No matching records found.
              </TableCell>
            </TableRow>
          ) : (
            paginatedRows.map((row: GenericObject, index) => (
              <TableRow key={index}>
                {headers.map((header) => (
                  <TableCell key={header}>
                    {header === "status" ? (
                      <Badge
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          row.status === "Active"
                            ? "!bg-green-500/20 !text-green-600"
                            : row.status === "Pending"
                            ? "!bg-blue-500/20 !text-blue-600"
                            : "!bg-yellow-500/20 !text-yellow-600"
                        }`}
                      >
                        {row.status}
                      </Badge>
                    ) : (
                      row[header]
                    )}
                  </TableCell>
                ))}

                {/* ACTIONS */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <View className="h-4 w-4 mr-2" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" /> Edit
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

      {/* PAGINATION */}
      <div className="flex justify-between items-center px-6 py-4 text-sm">
        <span className="text-muted-foreground">
          Page {page} of {pageCount}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </Button>

          <Button
            variant="outline"
            size="sm"
            disabled={page === pageCount}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
