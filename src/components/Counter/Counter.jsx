import React, { useState } from 'react';

const Counter = (props) => {
    const [likes, setLikes] = useState(0)
    const increment = () => {
        setLikes(likes + 1)
    }
    const decrement = () => {
        setLikes(likes - 1)
    }
    return (
        <div>
            <div>{likes}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter;