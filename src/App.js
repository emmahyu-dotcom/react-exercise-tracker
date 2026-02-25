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
        <div className="menu">
          <h1>Exercise App Design</h1>
          {exercises.map((exercise) => (
            <button key={exercise.name} onClick={() => setSelectedExercise(exercise)} >
              {exercise.name}
              </button>
          ))}
        </div>
      ) : (
        <div className="exercise-screen">
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
          <button onClick={() => setSelectedExercise(null)}>Back</button>
          </div>
      )}
    </div>
  );
}

export default App;