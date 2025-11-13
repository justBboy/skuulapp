# Skuul Admin

A comprehensive school administration platform built with Next.js, designed to streamline teacher management, student enrollment, course administration, class scheduling, and financial operations.

## 📋 Project Overview

**Skuul Admin** is a multi-tenant school management system that provides administrators with powerful tools to manage all aspects of school operations. The platform emphasizes role-based access control, performance monitoring, and comprehensive audit trails.

### Core Features

#### A. Administrative Management

- **Teacher Management**
  - Create, Read, Update, Deactivate teachers
  - Onboard new teachers with default roles
  - Manage class assignments and teaching schedules
  
- **Student Management**
  - Create, Read, Update, Archive students
  - Enroll students and assign to classes
  - Manage biographical and contact information
  
- **Course (Lesson) Management**
  - Define curriculum structure (e.g., "AP Calculus," "World History 101")
  - Create reusable course definitions shared across multiple classes
  - Full CRUD operations on course catalog
  
- **Class Management**
  - Create specific course instances (e.g., "AP Calc - Period 5")
  - Assign teachers and link to course definitions
  - Manage class schedules and student rosters
  
- **Fee Management**
  - Manage school fees for students
  - Track and process payments
  - Generate financial reports

#### B. Access & Security Features

- **Role & Permission Management**
  - Define and assign custom roles (School Admin, Department Head, Substitute Teacher)
  - Granular permissions (e.g., `CAN_DELETE_STUDENT`, `CAN_APPROVE_LESSON`)
  - Role-based access control throughout the platform
  
- **Admin Creation**
  - Create and manage school admin accounts
  - Controlled access within school's tenant
  
- **Audit Logs & Activity Feed**
  - Chronological log of administrative actions
  - Track who performed what actions and when
  - Essential for compliance and accountability

#### C. Performance & Oversight Monitoring

- **Student Performance Overview**
  - Aggregated school-wide performance metrics
  - Trend analysis by Grade Level, Course, and Department
  - Identify systemic issues or successful programs
  
- **Teacher Performance Indicators**
  - Average class size metrics
  - Pass rate consistency across classes
  - Outstanding task tracking (e.g., pending grade submissions)
  - Monitor teacher workload and compliance

## 🏗️ Project Architecture

This project follows a **feature-based architecture** using Next.js App Router with clear separation between routing, business logic, UI components, and utilities.

### Folder Structure

```
skuuladmin/
├── app/                    # Next.js routing (file-system based)
│   ├── (dashboard)/        # Route group for authenticated pages
│   │   ├── teachers/       # Teacher management routes
│   │   ├── students/       # Student management routes
│   │   ├── courses/        # Course management routes
│   │   ├── classes/        # Class management routes
│   │   ├── fees/           # Fee management routes
│   │   └── reports/        # Performance & oversight routes
│   ├── auth/               # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
│
├── features/               # Business logic & API calls
│   ├── teacher/
│   │   ├── teacherApi.ts   # API endpoints (RTK Query)
│   │   ├── teacherSlice.ts # Redux state management
│   │   └── hooks/
│   │       └── useTeacherData.ts
│   ├── student/
│   │   ├── studentApi.ts
│   │   ├── studentSlice.ts
│   │   └── hooks/
│   ├── course/
│   │   ├── courseApi.ts
│   │   └── courseSlice.ts
│   ├── class/
│   │   ├── classApi.ts
│   │   └── classSlice.ts
│   ├── fee/
│   │   ├── feeApi.ts
│   │   ├── paymentApi.ts
│   │   └── feeSlice.ts
│   ├── auth/
│   │   ├── authApi.ts
│   │   └── authSlice.ts
│   ├── role/
│   │   ├── roleApi.ts
│   │   └── permissionSlice.ts
│   └── audit/
│       └── auditApi.ts
│
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI primitives (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   └── select.tsx
│   ├── forms/              # Domain-specific forms
│   │   ├── teacher/
│   │   │   ├── teacher-form.tsx
│   │   │   └── teacher-assignment-form.tsx
│   │   ├── student/
│   │   │   ├── student-form.tsx
│   │   │   └── enrollment-form.tsx
│   │   ├── course/
│   │   │   └── course-form.tsx
│   │   ├── class/
│   │   │   └── class-form.tsx
│   │   └── fee/
│   │       ├── fee-form.tsx
│   │       └── payment-form.tsx
│   ├── features/           # Feature components
│   │   ├── auth-checker.tsx
│   │   ├── permission-guard.tsx
│   │   └── role-badge.tsx
│   ├── section/            # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   ├── tables/             # Data table components
│   │   ├── teacher-table.tsx
│   │   ├── student-table.tsx
│   │   ├── course-table.tsx
│   │   └── data-table.tsx
│   ├── modals/             # Modal dialogs
│   │   ├── confirm-dialog.tsx
│   │   └── archive-modal.tsx
│   └── error-boundary/     # Error handling
│       └── error-boundary.tsx
│
├── common/                 # Shared utilities & constants
│   ├── config/
│   │   └── app-config.ts
│   ├── types/              # Shared TypeScript types
│   │   ├── teacher.ts
│   │   ├── student.ts
│   │   ├── course.ts
│   │   ├── class.ts
│   │   ├── fee.ts
│   │   ├── role.ts
│   │   └── audit.ts
│   ├── utils/              # Helper functions
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── date-utils.ts
│   ├── constants.ts        # App constants
│   └── dummy-data/         # Mock data for development
│
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Responsive detection
│   ├── use-debounce.tsx    # Debounce utility
│   └── use-local-storage.tsx
│
├── lib/                    # Third-party library configs
│   └── utils.ts            # Helper functions (cn, etc.)
│
└── public/                 # Static assets
    ├── images/
    ├── fonts/
    └── icons/
```

## 🎯 Architecture Principles

### 1. Separation of Concerns
- **Routing (`/app`)** - Where pages live
- **Logic (`/features`)** - What pages do (API calls, state management)
- **UI (`/components`)** - How pages look (presentational components)
- **Utils (`/common`)** - Shared helpers and utilities

### 2. Feature-Based Organization
- Group by domain/feature, not by file type
- Each feature is self-contained with its own API, state, and hooks
- Easy to locate and modify related code

### 3. Component Hierarchy
- `/ui` → Base primitives (button, input, card)
- `/forms` → Domain-specific forms (teacher-form, student-form)
- `/features` → Business components (auth-checker, permission-guard)
- `/section` → Layout components (header, sidebar)
- `/tables` → Data display components

### 4. Naming Conventions
- **Files**: `kebab-case.tsx`
- **Components**: `PascalCase`
- **Folders**: `kebab-case/`
- **API files**: `*Api.ts`
- **State files**: `*Slice.ts`

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Run the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit (RTK Query)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Authentication**: NextAuth.js (planned)

## 📦 Key Dependencies

```json
{
  "next": "16.0.3",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## 🔐 Security Features

- Role-based access control (RBAC)
- Granular permission system
- Audit logging for all administrative actions
- Multi-tenant architecture with data isolation
- Secure authentication and session management

## 📊 Performance Monitoring

The platform includes comprehensive monitoring dashboards for:
- Student performance trends
- Teacher workload metrics
- Class size analytics
- Fee payment tracking
- System-wide activity logs

## 🤝 Contributing

This project follows strict architectural patterns. When contributing:
1. Place routing logic in `/app`
2. Place business logic in `/features`
3. Place UI components in `/components`
4. Follow the established naming conventions
5. Ensure all new features include proper TypeScript types

## 📄 License

Private - All rights reserved

## 🔗 Related Projects

- **Skuul Mobile** - Mobile application for teachers and students
- **Skuul API** - Backend API service
