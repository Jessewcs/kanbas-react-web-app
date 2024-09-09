export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <button>Unpublish</button> <button>Publish</button>
            <table>
                <tr>
                <td valign="top">
                    <button>Import Existing Content</button>
                </td>
                </tr>
                <td valign="top">
                    <button>Import from Commons</button>
                </td>
                <tr>
                <td valign="top">
                    <button>Choose Home Page</button>
                </td>
                </tr>
                <tr>
                <td valign="top">
                    <button>View Course Stream</button>
                </td>
                </tr>
                <tr>
                <td valign="top">
                    <button>New Announcement</button>
                </td>
                </tr>
                <tr>
                <td valign="top">
                    <button>New Analytics</button>
                </td>
                </tr>
                <tr>
                <td valign="top">
                    <button>View Course Notifications</button>
                </td>
                </tr>
            </table>
        </div>
    );
}