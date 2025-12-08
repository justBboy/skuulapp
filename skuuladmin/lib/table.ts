import { School, Teacher } from "./types";

// export const  OverviewSchoolTableHeader = ["Id", "SchoolName", "AdminName","Email","Region","DateJoined","Status","Action"]


// OVERVIEW PAGE SCHOOL TABLE
export const OverviewSchoolTable: School[]= [
    {
        id:1,
        schoolName: "Law Acadamy",
        adminName: "Lawson Samson",
        email: "LawAca@school.edu",
        region: "Sunyani",
        dateJoined: "2023-09-15",
        status: "Active",
      
    },
    {
        id:2,
        schoolName: "Gideon Education Complex",
        adminName: "Gideon Asare",
        email: "MJ@school.edu",
        region: "Kumasi",
        dateJoined: "2021-03-14",
        status: "Pending",
       
    },
    {
        id:3,
        schoolName: "Tutu School",
        adminName: "Tutu Asare",
        email: "tutu@school.edu",
        region: "Accra",
        dateJoined: "2025-01-10",
        status: "Active",
      
    },
    {
        id:4,
        schoolName: "Solomon Acadamy",
        adminName: "Solomon",
        email: "solo@school.edu",
        region: "Tamale",
        dateJoined: "2018-10-18",
        status: "Suspended",
  
    },
    {
        id:5,
        schoolName: "Samson brain",
        adminName: "Samson Lawson",
        email: "sam@school.edu",
        region: "Bono",
        dateJoined: "2022-03-45",
        status: "Pending",
    },
    {
        id:6,
        schoolName: "Kumasi Anglican",
        adminName: "Adonko Oppong",
        email: "Kass@school.edu",
        region: "Kumasi",
        dateJoined: "2020-11-21",
        status: "Active",
    }
];

                          
                          
  // TEACHERS PAGE TABLE
  export const TeachersTable: Teacher[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@school.edu",
      phone: "+1 (555) 123-4567",
      gender: "female",
      subjects: ["Mathematics", "Physics"],
      classes: ["Grade 10A", "Grade 11B"],
      status: "active",
      dateJoined: "2023-08-15",
      department: "Science",
      // avatar: "/female-teacher-portrait.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@school.edu",
      phone: "+1 (555) 234-5678",
      gender: "male",
      subjects: ["English", "History"],
      classes: ["Grade 9A", "Grade 12A"],
      status: "active",
      dateJoined: "2022-01-10",
      department: "Languages",
      // avatar: "/male-teacher-portrait-asian.jpg",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.rodriguez@school.edu",
      phone: "+1 (555) 345-6789",
      gender: "female",
      subjects: ["Biology", "Chemistry"],
      classes: ["Grade 10B", "Grade 11A"],
      status: "active",
      dateJoined: "2024-11-20",
      department: "Science",
      // avatar: "/female-teacher-portrait-latina.jpg",
    },
    {
      id: "4",
      name: "David Williams",
      email: "david.williams@school.edu",
      phone: "+1 (555) 456-7890",
      gender: "male",
      subjects: ["Computer Science"],
      classes: ["Grade 11A", "Grade 12B"],
      status: "inactive",
      dateJoined: "2021-09-05",
      department: "Science",
      // avatar: "/male-teacher-portrait-glasses.jpg",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      email: "lisa.thompson@school.edu",
      phone: "+1 (555) 567-8901",
      gender: "female",
      subjects: ["Art", "Music"],
      classes: ["Grade 9B", "Grade 10A"],
      status: "active",
      dateJoined: "2023-03-22",
      department: "Arts",
      // avatar: "/female-teacher-portrait-creative.jpg",
    },
    {
      id: "6",
      name: "James Anderson",
      email: "james.anderson@school.edu",
      phone: "+1 (555) 678-9012",
      gender: "male",
      subjects: ["Physical Education"],
      classes: ["Grade 9A", "Grade 9B", "Grade 10A", "Grade 10B"],
      status: "active",
      dateJoined: "2020-08-01",
      department: "Physical Education",
      // avatar: "/male-athletic-teacher.jpg",
    },
    {
      id: "7",
      name: "Maria Garcia",
      email: "maria.garcia@school.edu",
      phone: "+1 (555) 789-0123",
      gender: "female",
      subjects: ["Geography", "Economics"],
      classes: ["Grade 11B", "Grade 12A"],
      status: "active",
      dateJoined: "2024-12-01",
      department: "Social Studies",
      // avatar: "/female-teacher-portrait-professional.jpg",
    },
    {
      id: "8",
      name: "Robert Brown",
      email: "robert.brown@school.edu",
      phone: "+1 (555) 890-1234",
      gender: "male",
      subjects: ["Mathematics"],
      classes: ["Grade 12A", "Grade 12B"],
      status: "inactive",
      dateJoined: "2019-06-15",
      department: "Mathematics",
      // avatar: "/male-senior-teacher.jpg",
    },
  ]
                          
                          