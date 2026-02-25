import React, {useState} from 'react';

function RepetitionExercise({name}) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <button onClick={reset}>Reset</button>
                <span style={{margin: "0 20px"}}>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;