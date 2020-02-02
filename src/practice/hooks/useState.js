import React, { useState, useEffect } from 'react'
import randomcolor from 'randomcolor';
function UseSate() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    function increment (){
        setCount(prevCount => prevCount + 1)
    }

    function decrement (){
        setCount(prevCount => prevCount - 1)
    }
    useEffect(() => {
        setColor(randomcolor())
       
       
    }, [count])
    return ( 
        <div>
            <h1 style ={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
        </div>
     );
}
 
export default UseSate;