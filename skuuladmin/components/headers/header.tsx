"use client";

import {
  Bell,
  LogOut,
  Search,
  Settings,
  UserRoundPen,
  Users,
  X,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "./theme-toggle";
import { ThemeToggleButton } from "@/components/theme/theme-toggle-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeaderSection() {
  const [showNotification, setShowNotification] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sample notifications
  const notifications = [
    { id: 1, text: "New School joined!", time: "2m ago" },
    { id: 2, text: "100 school hit 🏅", time: "10m ago" },
    { id: 3, text: "New request made", time: "1h ago" },
  ];

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowNotification(false);
      }
    }

    if (showNotification) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotification]);

  return (
    <div className="flex items-center justify-between mx-auto gap-4 relative w-full ">
      {/* Search Bar */}
      {/* <div className="flex items-center border border-gray-300 h-9 rounded-md px-2 gap-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
        <Search size={16} strokeWidth={2.25} className="text-gray-500" />
        <input
          type="text"
          name="search"
          id="search"
          className="w-full bg-transparent outline-none placeholder:text-sm placeholder:text-gray-400"
          placeholder="Search user or game mode"
        />
      </div> */}

      {/* Center: Search Bar */}
      <div className="hidden md:flex items-center w-1/2 border border-gray-200 bg-gray-50 rounded-md px-3 py-1.5 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
        <Search
          size={16}
          strokeWidth={2.25}
          className="text-gray-500 ml-1 mr-2"
        />
        <input
          type="text"
          placeholder="Search schools, students, teachers ..."
          className="w-full  bg-transparent outline-none text-sm placeholder:text-gray-400"
        />
      </div>

      {/* Notification Bell + Dropdown */}
      <div className="flex w-full justify-end">
        <div className="">
          <ThemeToggleButton />
        </div>
        <div className="relative" ref={dropdownRef}>
          {/* Bell Icon */}
          <div
            className="relative rounded-full p-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 cursor-pointer transition"
            onClick={() => setShowNotification(!showNotification)}
          >
            <Bell
              size={18}
              strokeWidth={2.25}
              className="text-gray-700 dark:text-gray-300"
            />
            {notifications.length > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                {notifications.length}
              </Badge>
            )}
          </div>

          {/* Animated Dropdown */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden z-50"
              >
                {/* Header */}
                <div className="flex justify-between items-center px-3 py-2 border-b">
                  <p className="text-sm font-semibold text-gray-700">
                    Notifications
                  </p>
                  <button
                    onClick={() => setShowNotification(false)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* List */}
                {notifications.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {notifications.map((note) => (
                      <li
                        key={note.id}
                        className="px-3 py-2 text-sm hover:bg-gray-50 transition flex flex-col border-b last:border-none"
                      >
                        <span className="text-gray-800">{note.text}</span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          {note.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-3 text-center text-gray-500 text-sm">
                    No notifications
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className=" flex ">
              <Avatar className="cursor-pointer outline-0 w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-3 mt-2 w-44">
            <DropdownMenuLabel>
              <div className=" flex flex-col items-start">
                <p className="text-sm leading-3">Lawson</p>
                <h2 className="text-xs text-muted-foreground">super admin</h2>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-sm">
              <UserRoundPen />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-sm">
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-sm">
              <Users />
              Switch Account
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-sm">
              <LogOut />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
