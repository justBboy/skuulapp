import { Activity, Building2, HandCoins, Merge, MonitorCog, School, User, UserCheck, UserPlus, UserX, Users } from "lucide-react";
import { PiUsersFourDuotone } from "react-icons/pi";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { CardFeatures } from "./types";
// import { GiTakeMyMoney } from "react-icons/gi";
export const OverviewCardFeatures:CardFeatures[] = [
    {
      title: "Total Schools",
      // description: "Number of schools using the system",
      value: "42",
      icon: School,
      subtitle: "+3% this month",
      viewStatus: true,
    },
    {
      title: "Sytem Activities",
      value: "89.5 %",
      icon: MonitorCog,
      subtitle: "+6% this month",
      viewStatus: false,
    },
    {
      title: "Most Active",
      value: "Lawson Acadamy",
      icon: Activity,
      subtitle: "+1% this month",
      viewStatus: false,
    },
    {
      title: "Revenue Overview",
      value: "304,390.80$",
    //   icon: GiTakeMyMoney,
      icon: HandCoins ,
      subtitle: "+8% this month",
      viewStatus: false,
    },
    {
      title: "Total Teachers",
      value: "648",
      icon: Users ,
      subtitle: "+9% this month",
      viewStatus: true,
    },
    {
      title: "Total Students",
      value: "81,200",
      icon: FaUsersBetweenLines ,
      subtitle: "+6% this month",
      viewStatus: true,
    },
    {
      title: "Other Staffs",
      value: "81,200",
      icon: PiUsersFourDuotone,
      subtitle: "+2% this month",
      viewStatus: true,
    },
    {
        title: "New Schools Onboarding",
        value: "4 New Schools",
        icon: Merge,
        subtitle: "+5% this month",
        viewStatus: true,
      },
  ];

  export const TeacherCardFeatures =[
    {
      title: "Total Teachers",
      value: "16",
      icon: Users ,
      subtitle: "Registered staff members",
      viewStatus: true,
   }, 
    {
      title: "Active Teachers",
      value: "12",
      icon: UserCheck, 
      subtitle: "+2% from last month",
      viewStatus: true,
   }, 
    {
      title: "Inactive Teachers",
      value: "4",
      icon: UserX ,
      subtitle: "",
      viewStatus: true,
   }, 
  //   {
  //     title: "Recently Added",
  //     value: "1",
  //     icon: UserPlus ,
  //     subtitle: "",
  //     viewStatus: false,
  //  }, 
    {
      title: "Department",
      value: "7",
      icon: Building2,
      subtitle: "",
      viewStatus: false,
   }, 
  ]