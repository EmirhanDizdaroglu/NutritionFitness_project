import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'; // CSS dosyasını import eder

function AdminPanel() {
    return (
        <div>
            <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/" className="navbar-logo">NUT-FIT</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/Login" className="nav-link">Sport Movements</a></li>
          <li className="nav-item"><a href="/Login" className="nav-link">Diet List</a></li>
          <li className="nav-item"><a href="/Login" className="nav-link">User Login</a></li>
          <li className="nav-item"><a href="/Register" className="nav-link">Register</a></li>
          <li className="nav-item"><a href="/AdminLogin" className="nav-link">Admin Login</a></li>
        </ul>
      </nav>
        
        <div className="admin-panel-container"> {/* Kutulu görünüm için stil */}
            <h1>Admin Panel</h1>
            <h2>Admin Operations</h2>

            <Link to="/AP_UserList" className="admin-panel-button user-list">
                User List
            </Link>
            <Link to="/AP_DietList" className="admin-panel-button diet-list">
                Diet List
            </Link>
            <Link to="/AP_SportMovements" className="admin-panel-button sports-movements">
                Sports Movements
            </Link>
        </div>
        </div>
    );
}

export default AdminPanel;
