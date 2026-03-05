import React, {useState} from 'react';
import otter from "../../assets/PushUps_otter.mp4";

function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);

    const plusCount = () => {setCount(prevCount => prevCount + 1);
    };
    const reset = () => {setCount(0);
    };

    return (
        <div className="pushups-display">
            <h2>{name}</h2>

            <div>
                <button onClick={reset}>Reset</button>
                <span>{count}</span>
                <button onClick={plusCount}>+</button>
            </div>

            <div className="pushups-otter">
                <video src={otter} autoPlay loop muted playsInline />
            </div>
        </div>
    );
}

export default RepetitionExercise;