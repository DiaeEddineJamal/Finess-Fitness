import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Workouts: React.FC = () => {
  const [bodyPart, setBodyPart] = useState<string>('');
  const [equipment, setEquipment] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises',
          params: {
            bodyPart: bodyPart,
            equipment: equipment,
            target: target,
            limit: '8',
            offset: offset.toString()
          },
          headers: {
            'X-RapidAPI-Key': '1613fb3be6mshde1b7a81aabb963p1de995jsn530471c268d2',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        // Filter exercises based on selected options
        const filteredExercises = response.data.filter((exercise: any) => {
          return (
            (!bodyPart || exercise.bodyPart === bodyPart) &&
            (!equipment || exercise.equipment === equipment) &&
            (!target || exercise.target === target)
          );
        });
        setExercises(filteredExercises);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setLoading(false);
      }
    };

    fetchExercises();
  }, [bodyPart, equipment, target, offset]); // Dependency array includes filters to trigger fetch when they change

  return (
    <div className="workouts-container">
      <h2>Filter Exercises</h2>
      <div className="filter-section">
        <label>Body Part:</label>
        <select className="filter-select" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
          <option value="">Select</option>
          <option value="back">Back</option>
          <option value="cardio">Cardio</option>
          <option value="chest">Chest</option>
          <option value="lower arms">Lower Arms</option>
          <option value="lower legs">Lower Legs</option>
          <option value="neck">Neck</option>
          <option value="shoulders">Shoulders</option>
        </select>
      </div>
      <div className="filter-section">
        <label>Equipment:</label>
        <select className="filter-select" value={equipment} onChange={(e) => setEquipment(e.target.value)}>
          <option value="">Select</option>
          <option value="assisted">Assisted</option>
          <option value="band">Band</option>
          <option value="barbell">Barbell</option>
          {/* Add more equipment options as needed */}
        </select>
      </div>
      <div className="filter-section">
        <label>Target:</label>
        <select className="filter-select" value={target} onChange={(e) => setTarget(e.target.value)}>
          <option value="">Select</option>
          <option value="abductors">Abductors</option>
          <option value="abs">Abs</option>
          <option value="adductors">Adductors</option>
          {/* Add more target options as needed */}
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
                {/* Display exercise details */}
                <img className="exercise-image" src={exercise.gifUrl} alt={exercise.name} />
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
