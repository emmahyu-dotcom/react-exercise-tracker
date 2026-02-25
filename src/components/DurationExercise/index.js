import React, {useState, useEffect} from 'react';

function DurationExercise ({name}) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => setTime((prev) => prev +1), 1000);
        }
        return () => clearInterval(timer);
    }, [running]);

    const reset = () => {
        setTime(0);
        setRunning(false);
    };

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds/60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2,'0');
        return `${m}:${s}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <div className="timer-display">{formatTime(time)}</div>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => setRunning(false)}>Stop</button>
        </div>
    );
}

export default DurationExercise;