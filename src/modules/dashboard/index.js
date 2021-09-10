import React from 'react';
import { Link} from "react-router-dom";

const DashboardPage = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/supplier">Suppliers</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default DashboardPage;