import React from 'react'

//es6 writing style
const Greet = (props) => {
    // extracting props to constanta a.k.a destructing props
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}!</h1>
        </div>
    )
}

export default Greet