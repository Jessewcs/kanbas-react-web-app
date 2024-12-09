import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
  grade?: number;
  letterGrade?: string;
  enrollmentDate?: Date;
  status: "ENROLLED" | "DROPPED" | "COMPLETED";
}

interface EnrollmentState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
}

const initialState: EnrollmentState = {
  enrollments: [],
  showAllCourses: false,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
    enroll: (
      state,
      { payload }: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const { userId, courseId } = payload;
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
        status: "ENROLLED",
        enrollmentDate: new Date(),
      };
      state.enrollments.push(newEnrollment);
    },
    unenroll: (
      state,
      { payload }: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const { userId, courseId } = payload;
      state.enrollments = state.enrollments.filter(
        (e) => e.course !== courseId || e.user !== userId
      );
    },
    toggleView: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { setEnrollments, enroll, unenroll, toggleView } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;