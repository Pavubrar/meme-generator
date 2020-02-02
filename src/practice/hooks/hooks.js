import React, {useState} from 'react'
function App2 () {
    const [value] = useState("yes") // value is yes for the initial
                                    //const person = {name: "Joe",age: 42}const { name, age } = person "array/object destructuring"
    return (  <div>
<h1>Is state important to know? {value}</h1>
    </div>);
}
 
export default App2;