import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "@/lib/types";

interface TeacherState {
  teachers: Teacher[];
  selectedTeacher: Teacher | null;
  isModalOpen: boolean;
  editingTeacher: Teacher | null;
}

const initialState: TeacherState = {
  teachers:[],
  selectedTeacher: null,
  isModalOpen: false,
  editingTeacher: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setSelectedTeacher(state, action: PayloadAction<Teacher>) {
      state.selectedTeacher = action.payload;
    },
    clearSelectedTeacher(state) {
      state.selectedTeacher = null;
    },
    openEditTeacher(state, action: PayloadAction<Teacher>) {
      state.editingTeacher = action.payload;
      state.isModalOpen = true;
    },  
    closeTeacherModal(state) {
      state.isModalOpen = false;
      state.editingTeacher = null;
    },

    toggleTeacherStatus(state, action: PayloadAction<string>) {
      const teacher = state.teachers.find(
        (t) => t.id === action.payload
      );
      if (teacher) {
        teacher.status =
          teacher.status === "active" ? "inactive" : "active";
      }
      


      if (state.selectedTeacher?.id === action.payload) {
        state.selectedTeacher.status =
          state.selectedTeacher.status === "active"
            ? "inactive"
            : "active";
      }
    },
  },
});

export const { setSelectedTeacher, clearSelectedTeacher , toggleTeacherStatus, openEditTeacher,
  closeTeacherModal,} = teacherSlice.actions;

export default teacherSlice.reducer;