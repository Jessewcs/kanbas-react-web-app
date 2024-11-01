import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { RootState } from "../../store";

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

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: RootState) => state.assignmentReducer.assignments
  );

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    course: cid || "",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    points: 100,
    description: "",
  });

  useEffect(() => {
    if (aid !== "new") {
      const existingAssignment = assignments.find(
        (a) => a.course === cid && a._id === aid
      );
      if (existingAssignment) {
        setAssignment({
          ...existingAssignment,
          availableUntil: existingAssignment.availableUntil || "",
        });
      }
    }
  }, [aid, cid, assignments]);

  const handleSubmit = () => {
    const newAssignment = {
      ...assignment,
      _id: aid === "new" ? new Date().getTime().toString() : assignment._id,
      course: cid || "",
    };

    if (aid === "new") {
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <h4>Assignment Name</h4>
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="form-control"
          type="text"
          placeholder="Enter assignment name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          className="form-control"
          rows={10}
          placeholder="Enter assignment description"
        />
      </div>

      <div className="row mb-3">
        <div className="col-auto">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col">
          <input
            id="wd-points"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            className="form-control"
            type="number"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="wd-due-date" className="form-label">
            Due Date
          </label>
          <input
            id="wd-due-date"
            type="text"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
            className="form-control"
            placeholder="MM-DD"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="wd-available-from" className="form-label">
            Available From
          </label>
          <input
            id="wd-available-from"
            type="text"
            value={assignment.availableFrom}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFrom: e.target.value })
            }
            className="form-control"
            placeholder="MM-DD"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="wd-available-until" className="form-label">
            Available Until
          </label>
          <input
            id="wd-available-until"
            type="text"
            value={assignment.availableUntil}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntil: e.target.value })
            }
            className="form-control"
            placeholder="MM-DD"
          />
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end gap-2">
        <button onClick={handleCancel} className="btn btn-secondary">
          Cancel
        </button>
        <button onClick={handleSubmit} className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
