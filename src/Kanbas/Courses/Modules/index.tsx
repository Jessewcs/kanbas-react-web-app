import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
              <ul className="wd-content list-group">
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Introduction to the course
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              READING
              <LessonControlButtons />
              <ul className="wd-content list-group">
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Full Stack Developer - Chapter 2 - Creating Us
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
              <ul className="wd-content list-group">
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Introduction to Web Development
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Creating an HTTP server with Node.js
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Creating a React Application
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
              <ul className="wd-content list-group">
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Deploy the assignment to Netlify
                </li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              SLIDES
              <LessonControlButtons />
              <ul className="wd-content list-group">
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Introduction to HTML and DOM
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Formatting Web content and Headings
                </li>
                <li className="wd-content-item list-group-item p-3 ps-1">
                  Formatting content with Lists and Tables
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

