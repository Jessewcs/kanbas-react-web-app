import { createSlice } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  points: number;
  description: string;
}

interface AssignmentState {
  assignments: Assignment[];
}

const initialState: AssignmentState = {
  assignments: [],
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, { payload: assId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assId);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    }
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;