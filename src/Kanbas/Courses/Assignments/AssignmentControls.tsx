import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <div className="input-group w-75 me-3 float-start" style={{ maxWidth: '500px' }}>
        <span className="input-group-text">
        <CiSearch />
        </span>
        <input
          id="wd-search-assignment"
          type="text"
          className="form-control"
          placeholder="Search for Assignments"
        />
      </div>

      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="me-2" />
        Assignment
      </button>

      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="me-2" />
        Group
      </button>
    </div>
  );
}