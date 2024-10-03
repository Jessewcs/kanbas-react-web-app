export default function AssignmentEditor() {
    return (
        <div className="container mt-4">
            <h6>Assignment Name</h6>
            <input className="form-control mb-3" id="wd-name" value="A1" />
            
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label"><b>Assignment Description</b></label>
                <textarea className="form-control" id="wd-description" rows={5}>
                    The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Link to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" id="wd-points" value={100} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-10">
                    <select className="form-control" id="wd-group">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-10">
                    <select className="form-control" id="wd-display-grade-as">
                        <option selected value="Percentage">Percentage</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-md-10">
                    <select className="form-control" id="wd-submission-type">
                        <option selected value="Online">Online</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <label className="form-label">Online Entry Options</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-website-url" />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotations</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" id="wd-assign-to" value="Everyone" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                </div>
                <div className="col-md-10">
                    <input type="date" className="form-control" id="wd-due-date" value="2024-05-13" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-available-from" className="form-label">Available from</label>
                </div>
                <div className="col-md-4">
                    <input type="date" className="form-control" id="wd-available-from" value="2024-05-06" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                </div>
                <div className="col-md-4">
                    <input type="date" className="form-control" id="wd-available-until" value="2024-05-20" />
                </div>
            </div>

            <hr />
            <div className="float-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}