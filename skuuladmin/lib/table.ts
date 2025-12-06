// export const  OverviewSchoolTableHeader = ["Id", "SchoolName", "AdminName","Email","Region","DateJoined","Status","Action"]
export type TableCellsDataType = {
    id: number;
    schoolName: string;
    adminName: string;
    email: string;
    region: string;
    dateJoined: string;
    status: string;
    name:string;
    grade:string;
    enrollmentDate:"";
  };

export const OverviewSchoolTable= [
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

export const StudentsTable= [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@school.edu",
      grade: "10",
      enrollmentDate: "2023-09-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.g@school.edu",
      grade: "9",
      enrollmentDate: "2023-10-20",
      status: "Active",
    },
    {
      id: 3,
      name: "David Lee",
      email: "david.l@school.edu",
      grade: "11",
      enrollmentDate: "2023-09-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Sophie Chen",
      email: "sophie.c@school.edu",
      grade: "10",
      enrollmentDate: "2023-11-05",
      status: "Active",
    },
    {
      id: 5,
      name: "James Murphy",
      email: "james.m@school.edu",
      grade: "12",
      enrollmentDate: "2023-09-01",
      status: "Graduated",
    },
  ];
                          
                          
                          
                          