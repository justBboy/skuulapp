import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"

export interface Teacher {
    id: string
    name: string
    email: string
    phone: string
    gender: "male" | "female" | "other"
    subjects: string[]
    classes: string[]
    status: "active" | "inactive"
    dateJoined: string
    // avatar?: string
    department: string
  }
  
  export interface ActivityLog {
    id: string
    action: string
    teacherName: string
    timestamp: string
    type: "added" | "updated" | "status_change" | "assignment"
  }
  
  export interface DepartmentStats {
    name: string
    count: number
  }
  
  export interface SubjectStats {
    name: string
    count: number
  }
  
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
 

  export interface QuickActionFeatures{
    label: string;
  icon: LucideIcon; // Use this if using Lucide. Use React.ElementType if custom components.
  variant: 'default' | 'outline'; //
  }