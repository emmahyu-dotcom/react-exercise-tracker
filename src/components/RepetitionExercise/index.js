import React, {useState} from 'react';

function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);

    const plusCount = () => {setCount(prevCount => prevCount + 1);
    };
    const reset = () => {setCount(0);
    };

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <button onClick={reset}>Reset</button>
                <span>{count}</span>
                <button onClick={plusCount}>+</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;