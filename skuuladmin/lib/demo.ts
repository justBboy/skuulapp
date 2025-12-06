import { Activity, CreditCard, Mail, Server } from "lucide-react";

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