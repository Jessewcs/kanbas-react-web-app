import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <Navigation />
                    </td>
                    <td valign="top">
                    <Routes>
                        <Route path="/" element={<Navigate to="Kanbas"/>} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard/*" element={<Dashboard />} />
                    </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
};