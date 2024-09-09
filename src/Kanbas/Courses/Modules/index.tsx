export default function Modules() {
    return (
        <div>
            <table>
                <tr>
                    <td valign="top">
                    <button>Collapse All</button>
                    </td>
                    <td valign="top">
                    <button>View Progress</button>
                    </td>
                    <td valign="top">
                        <select id="wd-select-one">
                        <option selected value="Publish All">Publish All</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    </td>
                    <td valign="top">
                    <button>+ Module</button>
                    </td>
                </tr>
            </table>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li id="wd-lesson">
                            <span id="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li id="wd-lesson2">
                            <span id="wd-title">READING</span>
                            <ul className="wd-content2">
                                <li className="wd-content2-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content2-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                            </ul>
                        </li>
                        <li id="wd-lesson3">
                            <span id="wd-title">SLIDES</span>
                            <ul className="wd-content3">
                                <li className="wd-content3-item">Introduction to Web Development</li>
                                <li className="wd-content3-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content3-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li id="wd-lesson">
                            <span id="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li id="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li id="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li id="wd-lesson3">
                            <span id="wd-title">SLIDES</span>
                            <ul className="wd-content3">
                                <li className="wd-content3-item">Introduction to HTML and DOM</li>
                                <li className="wd-content3-item">Formatting Web content and Headings</li>
                                <li className="wd-content3-item">Formating content with Lists and Tables</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}