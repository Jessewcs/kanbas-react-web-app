export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
            <input id="wd-name" value="A1 -ENV + HTML" /><br /> <br />
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Link to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea> <br /><br />

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-text-entry">Online Entry Options</label><br />
                        <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotations</label><br />

                        <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr> <br />

                <tr>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr> <br />
                <tr>
                    <td>
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr> <br />

                <tr>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>
            </table>
            <hr />
            <button>Cancel</button> <button>Save</button>
        </div>
    );
}
