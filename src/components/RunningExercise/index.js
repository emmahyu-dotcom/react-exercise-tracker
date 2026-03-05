import React, {useState, useEffect} from 'react';
import otter from "../../assets/Running_otter.mp4";

function RunningExercise({name}) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let timer;

        if (running) {
            timer = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running]);
    
    const timeFormat = (seconds) => {
        const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
        const sec = String(seconds % 60).padStart(2, "0");

        return `${mins}:${sec}`;
    };

    const lapLogs = () => {
        setLaps(prev => [...prev, timeFormat(time)]);
    };

    const reset = () => {
        setTime(0);
        setRunning(false);
        setLaps([]);
    };
    return (
        <div className="running-display">
            <h2>{name}</h2>
            <h3>{timeFormat(time)}</h3>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={lapLogs}>Lap</button>
            <button onClick={reset}>Reset</button>

            <div className="running-otter">
                <video src={otter} autoPlay loop muted playsInline />
            </div>

            <h4>Laps</h4>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1} : {lap}</li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise;