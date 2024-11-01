import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

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

const initialState = {
  assignments: assignments,
};

const assSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: payload.title,
        course: payload.course,
        description: payload.description,
        availableFrom: payload.availableFrom,
        availableUntil: payload.availableUntil,
        dueDate: payload.dueDate, 
        points: payload.points
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assId }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assId);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? { ...payload } : a
      );
    },
    editAssignment: (state, { payload: assId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assId ? { ...a, editing: true } : a
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assSlice.actions;

export default assSlice.reducer;