import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={link}
          className={`list-group-item border-0 rounded-sm
              ${
                pathname.includes(link)
                  ? "text-black active border"
                  : "text-danger"
              }`}
        >
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}