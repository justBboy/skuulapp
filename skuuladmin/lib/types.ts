import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"

// TEACHER'S TABLE ROW PROPS
export interface Teacher {
    // avatar: string
    id: string
    name: string
    email: string
    phone: string
    gender: "male" | "female" | "other"
    subjects: string[]
    classes: string[]
    status: "active" | "inactive"
    dateJoined: string
    department: string
    }
    
    // ACTIVITY CARD ROW PROPS
  export interface ActivityLog {
    id: string
    action: string
    name: string
    timestamp: string
    type: "added" | "updated" | "status_change" | "assignment"
  }
  
  // DEPARTMENT CARD ROW PROPS
  export interface DepartmentStats {
    name: string
    count: number
  }
  
  // SUBJECT CARD ROW PROPS
  export interface SubjectStats {
    name: string
    count: number
  }
  
  // SCHOOL TABLE ROW PROPS
  export interface School {
    id: number;
    schoolName: string;
    adminName: string;
    email: string;
    region: string;
    dateJoined: string;
    status: "active" | "pending" | "suspended";
    name:string;
    grade:string;
    enrollmentDate:"";
  };

  // REUSEABLE CARDS PROPS
  export interface CardFeatures  {
    title: string;
    value: string;
    // description: string;
    subtitle: string;
    viewStatus: boolean;
    // icon: ForwardRefExoticComponent<
    //   Omit<LucideProps, "ref"> & RefAttributes<SVGAElement>
    // >;
    // icon:string;
    icon: LucideIcon | IconType; // Use this if using Lucide. Use React.ElementType if custom components.
    
  };
 

  // QUICK ACTIONS PROPS
  export interface QuickActionFeatures{
    label: string;
  icon: LucideIcon; // Use this if using Lucide. Use React.ElementType if custom components.
  variant: 'default' | 'outline'; //
  href:string;
  }


  export interface StudentRowProps {
      // student: {
      //   id: string;
      //   name: string;
      //   email: string;
      //   avatar: string;
      //   class: string;
      //   status: "active" | "inactive" | "suspended";
      //   lastActive: string;
      //   avgScore: number;
      //   };
        id: string;
        name: string;
        email: string;
        avatar: string;
        class: string;
        status: "active" | "inactive" | "suspended";
        lastActive: string;
        avgScore: number;
  }
  
