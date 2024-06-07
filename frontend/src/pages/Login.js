import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css'; // CSS dosyasını ekleyin

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting credentials:', credentials);
      const response = await axios.post(
        'http://localhost:5000/api/login', 
        credentials,
        { withCredentials: true }
      );

      if (response.status === 200) {
        const userName = response.data.userName;
        navigate('/userPanel', { state: { userName } });
      }
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response && error.response.status === 400) {
        alert('Invalid email or password.');
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };

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
      <div
        style={{
          minHeight: 'calc(100vh - 70px)', // Navbar'ın yüksekliği çıkarıldı
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '32px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              width: '400px',
            }}
          >
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              Login Page
            </h1>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px',
                  color: 'white',
                  backgroundColor: '#333333',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  width: '100%',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#38A169')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#333333')}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;