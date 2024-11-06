import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { deleteAssignment } from "./reducer";
import DeleteAssignment from "./DeleteAssignment";
import "./styles.css";

export default function Assignment() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<{
    _id: string;
    title: string;
  } | null>(null);

  const assignments = useSelector(
    (state: RootState) => state.assignmentReducer.assignments
  );

  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  const handleDeleteClick = (assignmentId: string, title: string) => {
    setSelectedAssignment({ _id: assignmentId, title });
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedAssignment) {
      dispatch(deleteAssignment(selectedAssignment._id));
    }
    setShowDeleteModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-bg-black">
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                key={assignment._id}
              >
                <BsGripVertical className="me-2 fs-3" />
                <TbFilePencil className="wd-fg-color-green" />
                <strong>
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                </strong>
                <button
                  className="btn btn-danger float-end"
                  onClick={() => handleDeleteClick(assignment._id, assignment.title)}
                >
                  <FaTrash />
                </button>
                <div className="ps-5 mt-2">
                  <small className="text-muted">
                    Multiple Modules | <strong>Not available until</strong>{" "}
                    {assignment.availableFrom}
                    <br />
                    <span className="fw-bold">Due</span> {assignment.dueDate} |{" "}
                    {assignment.points} pts
                  </small>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {showDeleteModal && selectedAssignment && (
        <DeleteAssignment
          itemName={selectedAssignment.title}
          onCancel={() => setShowDeleteModal(false)}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  );
}