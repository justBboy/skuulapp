import { Activity, HandCoins, Merge, MonitorCog, School, Users } from "lucide-react";
import { PiUsersFourDuotone } from "react-icons/pi";
import { FaUsersBetweenLines } from "react-icons/fa6";
// import { GiTakeMyMoney } from "react-icons/gi";
export const cardFeatures = [
    {
      title: "Total Schools",
      description: "Number of schools using the system",
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