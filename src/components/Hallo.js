import React from 'react'

const Hello = () => {
    //JSX writing style
    // return (
    //     <div>
    //         <h1>Hello Toriq</h1>
    //     </div>
    // )

    return React.createElement('div', 
        {id: 'hello', className: 'helloClass'}, 
        React.createElement('h1', null, 'Hello Toriq')
    )
}

export default Hello