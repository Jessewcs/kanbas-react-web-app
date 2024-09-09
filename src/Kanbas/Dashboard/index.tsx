import { Link } from "react-router-dom"


export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="images/fullstack.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/1234/Home"}>CS1234 React JS</Link>
                        <p className="wd-dashboard-course-title">Full-Stack Development</p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course1">
                    <img src="images/download.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/4321/Home"}>CS4321 Foundations of Software Engineering</Link>
                        <p className="wd-dashboard-course-title">Software Engineering</p>
                        <Link to="/Kanbas/Courses/4321/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course2">
                    <img src="images/images.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/5520/Home"}>CS5520 Mobile Application Development</Link>
                        <p className="wd-dashboard-course-title">Android Development</p>
                        <Link to="/Kanbas/Courses/5520/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course3">
                    <img src="images/advance.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/6000/Home"}>CS6000 Advance Software Engineering</Link>
                        <p className="wd-dashboard-course-title">Advance Software Engineering</p>
                        <Link to="/Kanbas/Courses/6000/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course4">
                    <img src="images/download.png" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/4321/Home"}>CS5004 Object Oriented Design (OOD)</Link>
                        <p className="wd-dashboard-course-title">OOD with Java</p>
                        <Link to="/Kanbas/Courses/5004/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course5">
                    <img src="images/algo.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/4321/Home"}>CS5500 Algorithms</Link>
                        <p className="wd-dashboard-course-title">Algorithms</p>
                        <Link to="/Kanbas/Courses/5500/Home"> Go</Link>
                    </div>
                </div>
                <div className="wd-dashboard-course6">
                    <img src="images/computer.jpg" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link" to={"/Kanbas/Courses/4321/Home"}>CS5300 Fundamentals of Computer Networking</Link>
                        <p className="wd-dashboard-course-title">Computer Networking</p>
                        <Link to="/Kanbas/Courses/5300/Home"> Go</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}