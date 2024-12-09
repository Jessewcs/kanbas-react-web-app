import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAllAssignments = async () => {
  const { data } = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${courseId}`);
  return data;
};

export const createAssignmentForCourse = async (assignment: any) => {
    const response = await axiosWithCredentials.post(
      `${ASSIGNMENTS_API}/${assignment.course}`,
      assignment
    );
    return response.data;
  };

export const updateAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignment.course}/${assignment._id}`,
    assignment
  );
  return data;
};

export const deleteAssignment = async (courseId: string, assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${courseId}/${assignmentId}`
  );
  return data;
};