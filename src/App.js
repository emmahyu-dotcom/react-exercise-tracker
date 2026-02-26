import React, {useState} from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import './App.css';

function App(){
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    {name: "Push Ups", type: "repetition"},
    {name: "Running", type: "duration"},
    {name: "Plank", type: "duration"},
  ];

  return (
    <div className="App">

      {!selectedExercise ? (

        <div className="menu-page">
          <header>
            <h1>Exercise App</h1>
          </header>

          <div className="menu">
            {exercises.map((exercise) => (
              <button 
              className="exercise-button"
              key={exercise.name}
              onClick={() => setSelectedExercise(exercise)}>{exercise.name}</button>
            ))}
          </div>

        </div>

          ) : (

            <div className="exercise-page">

              {selectedExercise.type === "repetition" ? (
                <RepetitionExercise name={selectedExercise.name} />
              ) : (
                <DurationExercise name={selectedExercise.name} />
              )}

              <button
              className="back-button"
              onClick={() => setSelectedExercise(null)}>Back</button>

            </div>
      )}
    </div>
  );
}

export default App;