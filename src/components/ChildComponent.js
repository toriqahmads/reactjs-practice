import React from 'react'

function ChildComponent(props) {
    return (
        // for passing parameter to parent component use arrow function like this 
        // onClick={() => props.greetHandler("I\'m from child component")
        <div>
            <button onClick={() => props.greetHandler("I\'m from child component")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
