import { Activity, BarChart3, CreditCard, Download, Eye, FileText, Mail, Megaphone, Plus, Server, Upload } from "lucide-react";
import { ActivityLog, QuickActionFeatures } from "./types";


// RECENT ENROLLMENT PAGE
export const RecentAddedSchool=[
    {
        id:1,
        schoolName: "Tutu School",
        email: "tutu@school.edu",
        joined: "2 hours ago",       
    },
    {
        id:2,
        schoolName: "Solomon Acadamy",
        email: "solo@school.edu",
        joined: "1 day ago",
    },
    {
        id:3,
        schoolName: "Gideon Education Complex",
        email: "MJ@school.edu",
        joined: "4 days ago",
    },
    
   
    {
        id:4,
        schoolName: "Law Acadamy",
        email: "LawAca@school.edu",
        joined: "1 week ago",
    },
   
]

// SCHOOL REQUIRE ATTENTION PAGE
export const SchoolsAttentionData = [
    {
      name: "Golden Gate College",
      issue: "Pending approval",
      type: "pending",
      description: "Profile incomplete - missing documents",
    },
    {
      name: "Excel High School",
      issue: "Payment overdue",
      type: "payment",
      description: "GHS 2,500 pending for 45 days",
    },
    {
      name: "Victory Academy",
      issue: "Suspended",
      type: "suspended",
      description: "Terms of service violation",
    },
  ];

//   SYSTEM HEALTH PAGE
  export const SystemHealthData = [
    {
      name: "API Services",
      status: "operational",
      uptime: "99.9%",
      icon: Server,
    },
    {
      name: "SMS Gateway",
      status: "operational",
      uptime: "99.5%",
      icon: Activity,
    },
    {
      name: "Email Service",
      status: "down",
      uptime: "34.8%",
      icon: Mail,
    },
    {
      name: "Payment Gateway",
      status: "degraded",
      uptime: "98.2%",
      icon: CreditCard,
    },
  ];

// RANK PERFORMANCE PAGE
  export const TopPerformingSchools = [
    {
      name: "St. Paul's Academy",
      score: 92,
      students: 1250,
      attendance: 88,
      trend: "up",
    },
    {
      name: "Prestige Academy",
      score: 65,
      students: 2100,
      attendance: 96,
      trend: "up",
    },
    {
      name: "Sunrise International",
      score: 48,
      students: 890,
      attendance: 94,
      trend: "up",
    },
  ];

  // RECENT TEACHERS ACTIVITY IN TEACHERS PAGE
  export const teachersActivities: ActivityLog[] = [
    {
      id: "1",
      action: "New teacher added",
      teacherName: "Maria Garcia",
      timestamp: "2024-12-01T09:30:00",
      type: "added",
    },
    {
      id: "2",
      action: "Profile updated",
      teacherName: "Sarah Johnson",
      timestamp: "2024-11-28T14:15:00",
      type: "updated",
    },
    {
      id: "3",
      action: "Status changed to inactive",
      teacherName: "Robert Brown",
      timestamp: "2024-11-25T11:00:00",
      type: "status_change",
    },
    {
      id: "4",
      action: "Assigned to Grade 11A",
      teacherName: "Emily Rodriguez",
      timestamp: "2024-11-20T16:45:00",
      type: "assignment",
    },
    {
      id: "5",
      action: "New teacher added",
      teacherName: "Emily Rodriguez",
      timestamp: "2024-11-20T10:00:00",
      type: "added",
    },
  ]

  export const overviewQuickActions:QuickActionFeatures[] = [
    {
      label: "Register New School",
      icon: Plus,
      variant: "default" as const,
      href:"#"
    },
    {
      label: "View All Schools",
      icon: Eye,
      variant: "outline" as const,
      href:"#"
    },
    {
      label: "Send Announcement",
      icon: Megaphone,
      variant: "outline" as const,
      href:"#"
    },
    {
      label: "Create Course Template",
      icon: FileText,
      variant: "outline" as const,
      href:"#"
    },
    {
      label: "Bulk Import",
      icon: Upload,
      variant: "outline" as const,
      href:"#"
    },
    {
      label: "Generate Report",
      icon: BarChart3,
      variant: "outline" as const,
      href:"#"
    },
  ];

  export const teachersQuickActions =[
    {
      label: "Add Teacher",
      icon: Plus,
      variant: "default" as const,
    },
    {
      label: "View All Teachers",
      icon: Eye,
      variant: "outline" as const,
    }, 
    {
      label: "Send Announcement",
      icon: Megaphone,
      variant: "outline" as const,
    },
    {
      label: "Export",
      icon: Download,
      variant: "outline" as const,
    },
  ]