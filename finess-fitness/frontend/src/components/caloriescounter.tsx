import React, { useState } from 'react';
import axios from 'axios';

// Define the type of the meal object
interface Meal {
  title: string;
  image: string;
  imageUrl: string; // Add the imageUrl property
}

const CaloriesCounter: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [caloriesPerDay, setCaloriesPerDay] = useState<number | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]); // Specify the type of meals as Meal[]
  const [loading, setLoading] = useState<boolean>(false);

  const calculateCaloriesPerDay = () => {
    // Harris-Benedict equation for calculating BMR (Basal Metabolic Rate)
    // For male: BMR = 88.362 + (13.397 * weight in kg) + (4.799 * height in cm) - (5.677 * age in years)
    // For female: BMR = 447.593 + (9.247 * weight in kg) + (3.098 * height in cm) - (4.330 * age in years)
    const BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * 25); // Assuming age is 25
    // For simplicity, assuming average activity level and not considering age and gender
    const calories = Math.round(BMR * 1.55); // Multiply BMR by activity level
    setCaloriesPerDay(calories);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      calculateCaloriesPerDay(); // Calculate calories per day
      const response = await axios.get(
        'https://api.spoonacular.com/mealplanner/generate',
        {
          params: {
            apiKey: '02be55fb5b4f40ef8655b9170aea41c5',
            timeFrame: 'day',
            targetCalories: caloriesPerDay,
          }
        }
      );
      console.log('Response:', response.data);
      setMeals(response.data.meals.map((meal: Meal) => ({ // Specify the type of meal
        title: meal.title,
        image: meal.image,
        imageUrl: `https://spoonacular.com/recipeImages/${meal.image}`, // Construct the imageUrl
      })));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const styles: React.CSSProperties = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={styles}>
      <h2>Calories Counter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" value={weight} onChange={(e) => setWeight(parseInt(e.target.value))} />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Generate Meal Plan'}</button>
      </form>
      {caloriesPerDay && (
        <div className="meal-plan">
          <h3>Recommended Daily Calorie Intake: {caloriesPerDay} calories</h3>
          <h3>Meal List:</h3>
          <ul>
            {meals.map((meal, index) => (
              <li key={index}>
                <div>{meal.title}</div>
                <img src={meal.imageUrl} alt={meal.title} style={{ width: '100px', height: '100px' }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CaloriesCounter;
