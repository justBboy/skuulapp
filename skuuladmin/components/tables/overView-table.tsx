"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Pencil, Trash2, Search, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type TableProps<T extends object> = {
  data: T[];
  title: string;
  caption: string;
  description?: string;
  page?: number;
  pageSize?: number;
  total?: number;
  // Server-ready handlers
  onSearch?: (value: string) => void;
  onSort?: (column: keyof T) => void;
  onPageChange?: (page: number) => void;
};

export function DynamicTable<T extends object>({
  data,
  title,
  caption,
  description,
  page = 1,
  pageSize = 5,
  total = data.length,
  onSearch,
  onSort,
  onPageChange,
}: TableProps<T>) {
  const [localSearch, setLocalSearch] = useState("");
  const headers = Object.keys(data[0] || {}) as (keyof T)[];

  // Local search fallback
  const filteredData = useMemo(() => {
    if (onSearch) return data; // server controls filtering

    if (!localSearch) return data;

    return data.filter((row) =>
      headers.some((key) =>
        String(row[key]).toLowerCase().includes(localSearch.toLowerCase())
      )
    );
  }, [localSearch, data]);

  // Local pagination fallback
  const paginatedData = useMemo(() => {
    if (onPageChange) return filteredData; // server controls pagination

    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  const totalPages = Math.ceil(total / pageSize);

  const renderCell = (key: keyof T, value: any) => {
    // Status badge auto-detection
    if (key === "status") {
      const color =
        value === "Active"
          ? "!bg-green-500/20 !text-green-600"
          : value === "Pending"
          ? "!bg-blue-500/20 !text-blue-600"
          : "!bg-yellow-500/20 !text-yellow-600";

      return (
        <Badge className={`px-3 py-1 text-xs font-semibold ${color}`}>
          {value}
        </Badge>
      );
    }

    return value?.toString ? value.toString() : value;
  };

  return (
    <div className="space-y-6">
      <div className="border rounded-xl p-6 bg-background">
        {/* SEARCH */}
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-muted-foreground">{caption}</p>
          </div>
          <div className="mt-4 relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 "
              onChange={(e) => {
                setLocalSearch(e.target.value);
                onSearch && onSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {/* TABLE */}
        <Table className="mt-6">
          {/* PAGINATION */}
          <TableCaption className="flex items-center justify-between">
            {/* <p>
              Page {page} of {totalPages}. {description}
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => onPageChange && onPageChange(page - 1)}
              >
                Previous
              </Button>

              <Button
                variant="outline"
                disabled={page >= totalPages}
                onClick={() => onPageChange && onPageChange(page + 1)}
              >
                Next
              </Button>
            </div> */}
          </TableCaption>
          <TableHeader>
            <TableRow>
              {headers.map((key) => (
                <TableHead
                  key={String(key)}
                  className="cursor-not-allowed font-extrabold capitalize "
                  onClick={() => onSort && onSort(key)}
                >
                  {String(key)}
                </TableHead>
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((row, i) => (
              <TableRow key={i}>
                {headers.map((key) => (
                  <TableCell key={String(key)} className="text-xs">
                    {renderCell(key, row[key])}
                  </TableCell>
                ))}

                {/* ACTION COLUMN */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter className="!bg-transparent ">
            <TableRow className="hover:!bg-transparent">
              <TableCell colSpan={headers.length}>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-medium text-foreground">1-8</span> of{" "}
                    <span className="font-medium text-foreground">1,245</span>{" "}
                    students
                  </p>
                  <div className="flex justify-end gap-3 mt-4">
                    <Button
                      variant="outline"
                      disabled={page === 1}
                      onClick={() => onPageChange && onPageChange(page - 1)}
                      className="cursor-pointer"
                    >
                      Previous
                    </Button>

                    <Button
                      variant="outline"
                      disabled={page >= totalPages}
                      onClick={() => onPageChange && onPageChange(page + 1)}
                      className="cursor-pointer"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
