import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UP_SportMovements = () => {
    const navigate = useNavigate();
    const [movementList, setMovementList] = useState([]);
    const [bmiCategory, setBmiCategory] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/userProfile', {
                    withCredentials: true
                });
                const user = response.data;
                const bmi = user.BMI;

                let category = '';
                if (bmi < 18.5) {
                    category = 'weight_gain';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    category = 'weight_maintenance';
                } else {
                    category = 'weight_loss';
                }

                setBmiCategory(category);
                setCurrentCategory(category);
                setMovementList(getMovementList(category));
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login'); // If user data cannot be fetched, redirect to login page
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    const getMovementList = (category) => {
        const movementLists = {
            weight_gain: [
                {
                    day: 'Monday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Chest' },
                        { name: 'Incline Dumbbell Press', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Cable Crossover', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Chest' },
                        { name: 'Overhead Press', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Shoulders' },
                        { name: 'Lateral Raises', sets: [{ reps: 5, repetitions: 12 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Face Pulls', sets: [{ reps: 3, repetitions: 15 }], targetLimb: 'Rear Shoulders' },
                        { name: 'Triceps Push Down', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Triceps' }
                    ]
                },
                { day: 'Tuesday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Wednesday',
                    exercises: [
                        { name: 'Squats', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Legs' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 15 }], targetLimb: 'Legs' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Legs' },
                        { name: 'Adductor exercise', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Inner Thigh' },
                        { name: 'Abductor exercise', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Outer Thigh' }
                    ]
                },
                { day: 'Thursday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Friday',
                    exercises: [
                        { name: 'Lat Pull Down', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Lats' },
                        { name: 'Seated Cable Row', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Back' },
                        { name: 'Rope Pullover', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Lats' },
                        { name: 'Deadlift', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Back' },
                        { name: 'Barbell Shrug', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Trapezius' },
                        { name: 'Barbell Bicep Curls', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Biceps' }
                    ]
                },
                { day: 'Saturday', exercises: [{ name: 'REST DAY' }] },
                { day: 'Sunday', exercises: [{ name: 'REST DAY' }] }
            ],
            
            weight_maintenance: [
                {
                    day: 'Monday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Dumbbell Shoulder Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Shoulder' },
                        { name: 'Lateral Raise', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Barbell Row', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Upper Back' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Leg' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Hamstrings' },
                        { name: 'Hammer Curl', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Triceps Push Down', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Triceps' }
                    ]
                },
                { day: 'Tuesday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Wednesday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Dumbbell Shoulder Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Shoulder' },
                        { name: 'Lateral Raise', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Barbell Row', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Upper Back' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Leg' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Hamstrings' },
                        { name: 'Hammer Curl', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Triceps Push Down', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Triceps' }
                    ]
                },
                { day: 'Thursday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Friday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Dumbbell Shoulder Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Shoulder' },
                        { name: 'Lateral Raise', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Barbell Row', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Upper Back' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Leg' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Hamstrings' },
                        { name: 'Hammer Curl', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Triceps Push Down', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Triceps' }
                    ]
                },
                { day: 'Saturday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Sunday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 4, repetitions: 10 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Dumbbell Shoulder Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Shoulder' },
                        { name: 'Lateral Raise', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Barbell Row', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Upper Back' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 10 }], targetLimb: 'Leg' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Hamstrings' },
                        { name: 'Hammer Curl', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Triceps Push Down', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Triceps' }
                    ]
                }
            ],
            weight_loss: [
                {
                    day: 'Monday',
                    exercises: [
                        { name: 'Dumbbell Bench Press', sets: [{ reps: 4, repetitions: 15 }], targetLimb: 'Chest' },
                        { name: 'Incline Dumbbell Press', sets: [{ reps: 5, repetitions: 12 }], targetLimb: 'Chest' },
                        { name: 'Dumbbell Fly', sets: [{ reps: 3, repetitions: 20 }], targetLimb: 'Outer Portion Of The Chest' },
                        { name: 'Cable Crossover', sets: [{ reps: 5, repetitions: 20 }], targetLimb: 'Chest' },
                    ]
                },
                {
                    day: 'Tuesday',
                    exercises: [
                        { name: 'Overhead Press', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Shoulders' },
                        { name: 'Dumbbell Shoulder Press', sets: [{ reps: 5, repetitions: 12 }], targetLimb: 'Shoulders' },
                        { name: 'Lateral Raises', sets: [{ reps: 8, repetitions: 15 }], targetLimb: 'Lateral Deltoid' },
                        { name: 'Face Pulls', sets: [{ reps: 4, repetitions: 15 }], targetLimb: 'Rear Shoulders' },
                    ]
                },
                {
                    day: 'Wednesday',
                    exercises: [
                        { name: 'Lat Pull Down', sets: [{ reps: 6, repetitions: 10 }], targetLimb: 'Lats' },
                        { name: 'Seated Cable Row', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Back' },
                        { name: 'Rope Pullover', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Lats' },
                        { name: 'Deadlift', sets: [{ reps: 5, repetitions: 10 }], targetLimb: 'Back' },
                    ]
                },
                { day: 'Thursday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Friday',
                    exercises: [
                        { name: 'Squats', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Legs' },
                        { name: 'Leg Press', sets: [{ reps: 3, repetitions: 15 }], targetLimb: 'Legs' },
                        { name: 'Leg Extension', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Quadriceps' },
                        { name: 'Leg Curl', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Legs' },
                        { name: 'Adductor exercise', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Inner Thigh' },
                        { name: 'Hip Thrust', sets: [{ reps: 5, repetitions: 15 }], targetLimb: 'Glutes' },
                        { name: 'Abductor exercise', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Outer thigh' },
                    ]
                },
                { day: 'Saturday', exercises: [{ name: 'REST DAY' }] },
                {
                    day: 'Sunday',
                    exercises: [
                        { name: 'Triceps Push Down', sets: [{ reps: 6, repetitions: 12 }], targetLimb: 'Triceps' },
                        { name: 'Overhead Dumbbell Extension', sets: [{ reps: 5, repetitions: 15 }], targetLimb: 'Triceps' },
                        { name: 'French Press', sets: [{ reps: 4, repetitions: 20 }], targetLimb: 'Triceps' },
                        { name: 'Barbell Bicep Curls', sets: [{ reps: 3, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Hammer Curl', sets: [{ reps: 4, repetitions: 12 }], targetLimb: 'Biceps' },
                        { name: 'Incline Dumbbell Curl', sets: [{ reps: 6, repetitions: 15 }], targetLimb: 'Biceps' },
                    ]
                },
            ]
        };

        return movementLists[category] || [];
    };

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setMovementList(getMovementList(category));
    };

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
    }

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
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sport Movements</h1>
                <div style={buttonContainerStyle}>
                    <button onClick={() => handleCategoryChange(bmiCategory)} style={{ ...buttonStyle, backgroundColor: '#007BFF' }}>Recommended ({formatCategory(bmiCategory)})</button>
                    <button onClick={() => handleCategoryChange('weight_gain')} style={{ ...buttonStyle, backgroundColor: '#28A745' }}>Weight Gain</button>
                    <button onClick={() => handleCategoryChange('weight_maintenance')} style={{ ...buttonStyle, backgroundColor: '#FFC107' }}>Weight Maintenance</button>
                    <button onClick={() => handleCategoryChange('weight_loss')} style={{ ...buttonStyle, backgroundColor: '#DC3545' }}>Weight Loss</button>
                </div>
                {movementList.map((dayPlan, dayIndex) => (
                    <div key={dayIndex} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <h2 style={{ color: '#333' }}>{dayPlan.day}</h2>
                        <ul style={{ listStyleType: 'none', padding: '0' }}>
                            {dayPlan.exercises.map((exercise, exerciseIndex) => (
                                <li key={exerciseIndex} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                                    <h3 style={{ margin: '0 0 5px 0', color: '#555' }}>{exercise.name}</h3>
                                    {exercise.sets && exercise.sets.map((set, setIndex) => (
                                        <div key={setIndex}>
                                            <p style={{ margin: '0 0 5px 0', color: '#777' }}>Reps: {set.reps}</p>
                                            <p style={{ margin: '0 0 5px 0', color: '#777' }}>Repetitions: {set.repetitions} {set.unit ? set.unit : ''}</p>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block'
};

const buttonContainerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px' // Adds spacing between buttons
};

const formatCategory = (category) => {
    return category.replace(/_/g, ' ');
};

export default UP_SportMovements;