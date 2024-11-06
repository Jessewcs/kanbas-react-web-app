import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";
import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignment() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary text-bg-black">
            <BsGripVertical className="me-2 fs-3" />
            <strong>ASSIGNMENTS</strong>
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment: any) => (
              <li
                className="wd-lesson list-group-item p-3 ps-1"
                key={assignment._id}
              >
                <BsGripVertical className="me-2 fs-3" />
                <TbFilePencil className="wd-fg-color-green" />
                <strong>
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </a>
                </strong>
                <LessonControlButtons />
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
    </div>
  );
}
