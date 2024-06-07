import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function UserPanel() {
    const location = useLocation();
    const { userName, user } = location.state; // userName and user data taken from state

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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ccc', // Border added
                width: '100%',
                maxWidth: '400px', // Maximum width for the container
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                }}>
                    Hello, {userName}
                </h1>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                }}>
                    User Operations
                </h2>
                <p style={{
                    fontSize: '18px',
                    marginBottom: '32px'
                }}>
                    Welcome, {userName}
                </p>

                <Link to="/UP_Settings" style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    marginBottom: '16px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}>
                    Settings
                </Link>
                <Link to="/UP_DietList" state={{ user }} style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    marginBottom: '16px',
                    backgroundColor: '#28A745',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#28A745'}>
                    Show Diet List
                </Link>
                <Link to="/UP_SportMovements" style={{
                    display: 'block',
                    width: '100%',
                    padding: '12px',
                    marginBottom: '16px',
                    backgroundColor: '#FFC107',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#FFC107'}>
                    Show Sport Movements
                </Link>
            </div>
        </div>
        </div>
    );
}

export default UserPanel;
