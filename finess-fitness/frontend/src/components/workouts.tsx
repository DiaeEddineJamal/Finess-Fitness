import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Import CSS file

const Workouts: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [muscle, setMuscle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
          headers: {
            'X-Api-Key': 'B8Cm+v3VqpCYLQXQTL+fVg==jvZneb6job7Cpf2w'
          },
          params: {
            type: type,
            muscle: muscle,
            difficulty: difficulty,
            offset: offset
          }
        });
        setExercises(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, [type, muscle, difficulty, offset]); // Removed 'name' from the dependency array

  return (
    <div className="workouts-container">
      <h2>Filter Exercises</h2>
      <div className="filter-section">
        <label>Name:</label>
        <select className="filter-select" value={name} onChange={(e) => setName(e.target.value)}>
          <option value="">Select</option>
          <option value="press">Press</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Type:</label>
        <select className="filter-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select</option>
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic Weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Muscle:</label>
        <select className="filter-select" value={muscle} onChange={(e) => setMuscle(e.target.value)}>
          <option value="">Select</option>
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
          <option value="adductors">Adductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="traps">Traps</option>
          <option value="triceps">Triceps</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Difficulty:</label>
        <select className="filter-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Offset:</label>
        <input className="filter-input" type="number" value={offset} onChange={(e) => setOffset(parseInt(e.target.value))} />
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <h2>Exercises</h2>
          <div className="exercise-list">
            {exercises.map((exercise, index) => (
              <div key={index} className="exercise-item">
                <img className="exercise-image" src={exercise.image} alt={exercise.name} />
                <p>{exercise.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;
