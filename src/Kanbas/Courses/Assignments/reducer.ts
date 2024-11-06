import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      state.assignments.push(payload);
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

export const { addAssignment, deleteAssignment, updateAssignment } = assSlice.actions;
export default assSlice.reducer;