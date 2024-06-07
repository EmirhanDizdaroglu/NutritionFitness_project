import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css'; // CSS dosyasını ekleyin

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    nickname: '',
    Height: '', // 'height' yerine 'Height'
    Weight: '', // 'weight' yerine 'Weight'
    email: '',
    phoneNumber: '',
    password: '',
    aim: '',
  });
  const aimOptions = ['Loss Weight', 'Stay Fit', 'Gain Weight'];
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.Height && user.Weight) {
      const heightInMeters = user.Height / 100; // 'user.height' yerine 'user.Height'
      const calculatedBmi = (user.Weight / (heightInMeters * heightInMeters)).toFixed(2); // 'user.weight' yerine 'user.Weight'
      setBmi(calculatedBmi);
    }
  }, [user.Height, user.Weight]); // 'user.Height' ve 'user.Weight' doğru kullanıldı

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...user,
      bmi: bmi // Ensure BMI is included in the user data sent to the backend
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true // CORS sorununu önlemek için oturum bilgilerini taşı
        }
      );

      if (response.status === 201) {
        setSuccess('Registration successful!');
        navigate('/login'); // '/Login' yerine '/login'
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
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
        alignItems: 'center'
      }}
    >
        <div
          style={{
            backgroundColor: 'white',
            padding: '32px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px',
              textAlign: 'center'
            }}
          >
            Register
          </h1>
          {error && (
            <div
              style={{
                color: 'red',
                marginBottom: '16px',
                textAlign: 'center'
              }}
            >
              {error}
            </div>
          )}
          {success && (
            <div
              style={{
                color: 'green',
                marginBottom: '16px',
                textAlign: 'center'
              }}
            >
              {success}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={user.surname}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="text"
              name="nickname"
              placeholder="Nickname"
              value={user.nickname}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="number"
              name="Height"
              placeholder="Height (cm)"
              value={user.Height}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="number"
              name="Weight"
              placeholder="Weight (kg)"
              value={user.Weight}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={user.phoneNumber}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <select
              name="aim"
              value={user.aim}
              onChange={handleChange}
              style={{
                width: '422px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">Select aim...</option>
              {aimOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div>
              <strong>BMI: </strong> {bmi ? bmi : 'Enter height and weight to calculate'}
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                color: 'white',
                backgroundColor: '#333333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#38A169';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#333333';
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
