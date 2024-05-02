import React, { useState } from 'react';
import axios from 'axios';
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';
import logoImage from './images/logonobg.png';
import './caloriescounter.css';

interface Meal {
  label: string;
  image: string;
}

const CaloriesCounter: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [sex, setSex] = useState<string>('male');
  const [age, setAge] = useState<number>(0);
  const [caloriesPerDay, setCaloriesPerDay] = useState<number | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setState(0);
    } else {
      setState(value);
    }
  };

  const calculateCaloriesPerDay = () => {
    // Harris-Benedict equation for calculating BMR (Basal Metabolic Rate)
    let BMR;
    if (sex === 'male') {
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // For simplicity, assuming average activity level and not considering age and gender
    const calories = Math.round(BMR * 1.55); // Multiply BMR by activity level
    setCaloriesPerDay(calories);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      calculateCaloriesPerDay(); // Calculate calories per day
      if (caloriesPerDay !== null) {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
          params: {
            type: 'public',
            q: 'healthy',
            app_id: '7b656747', // Replace with your Edamam app ID
            app_key: '33decada20be585b388b52aae5c73865', // Replace with your Edamam app key
            calories: `${caloriesPerDay - 850}-${caloriesPerDay + 850}`,
            random: true,
            imageSize: 'SMALL',
          },
        });

        console.log('Response:', response.data);

        if (response.data.hits.length === 0) {
          console.error('No recipes found');
          setMeals([]);
        } else {
          setMeals(
            response.data.hits.map((hit: any) => ({
              label: hit.recipe.label,
              image: hit.recipe.image,
            }))
          );
        }
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ScrollAnimation>
      <nav className={`navbar ${sidebarOpen ? 'open' : ''}`}>
          <div className="container">
            <div className="logo-container">
              <img src={logoImage} alt="Logo" className="logo" width={120} height={53} />
            </div>
            <ul className="nav-links">
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/workouts">Workouts</Link></li>
              <li><Link to="/caloriescounter">Calories Counter</Link></li>
              <li><a href="#">Reports</a></li>
              <li><a href="https://www.patreon.com/finessfitness/membership">Support us</a></li>
            </ul>
          </div>
        </nav>
      </ScrollAnimation>
      <div className="calories-counter-container">
        <h2>Calories Counter</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              value={height.toString()}
              onChange={(e) => handleInputChange(e, setHeight)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight.toString()}
              onChange={(e) => handleInputChange(e, setWeight)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex:</label>
            <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age.toString()}
              onChange={(e) => handleInputChange(e, setAge)}
            />
          </div>
          <button disabled={loading} className="mealbtn">
            {loading ? 'Loading...' : 'Generate Meal Plan'}
          </button>
        </form>
        {caloriesPerDay && (
          <div className="meal-plan">
            <h3>Recommended Daily Calorie Intake: {caloriesPerDay} calories</h3>
            {meals.length > 0 ? (
              <div className="meals">
                {meals.map((meal, index) => (
                  <div key={index} className="meal-card">
                    <div className="meal-image">
                      <img src={meal.image} alt={meal.label} />
                    </div>
                    <div className="meal-label">
                      <h4>{meal.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No meals found.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CaloriesCounter;