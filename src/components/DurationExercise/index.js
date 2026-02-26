import React, {useState, useEffect} from 'react';

function DurationExercise ({name}) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => {setTime(prevTime => prevTime +1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [running]);

    const reset = () => {
        setTime(0);
        setRunning(false);
    };

    const timerFormat = (seconds) => {
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2,'0');
        return `${min}:${sec}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <div className="timer-display">{timerFormat(time)}</div>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => setRunning(false)}>Stop</button>
        </div>
    );
}

export default DurationExercise;