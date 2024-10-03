// export default function Assignments() {
//     return (
//         <div id="wd-assigments">
//             <input id="wd-search-assignment" placeholder="Search for Assignments" />
//             <button id="wd-add-assignment-group">+ Group</button>
//             <button id="wd-add-assignment">+ Assignment</button>
//             <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>
//             <ul id="wd-assignment-list">
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1 - ENV + HTML</a> <br />
//                     Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br /> <b>Due</b> May 13 at 11:59pm | 100 pts
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/456">A2 - CSS + BOOTSTRAP</a> <br />
//                     Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br /> <b>Due</b> May 20 at 11:59pm | 100 pts
//                 </li>
//                 <li className="wd-assignment-list-item">
//                     <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/789">A3 - JAVASCRIPT + REACT</a> <br />
//                     Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br /> <b>Due</b> May 27 at 11:59pm | 100 pts
//                 </li>
//             </ul>
//         </div>
//     );
// }
import AssignmentControls from "./AssignmentControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { TbFilePencil } from "react-icons/tb";

export default function Assignment() {
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
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TbFilePencil className="wd-fg-color-green" />
              <strong><a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a> </strong>
              <LessonControlButtons />
              <div className="ps-5 mt-2">
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am<br />
                  <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                </small>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TbFilePencil className="wd-fg-color-green" />
              <strong><a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A2</a> </strong>
              <LessonControlButtons />
              <div className="ps-5 mt-2">
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am<br />
                  <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
                </small>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <TbFilePencil className="wd-fg-color-green" />
              <strong><a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A3</a> </strong>
              <LessonControlButtons />
              <div className="ps-5 mt-2">
                <small className="text-muted">
                  Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am<br />
                  <span className="fw-bold">Due</span> May 27 at 11:59pm | 100 pts
                </small>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
