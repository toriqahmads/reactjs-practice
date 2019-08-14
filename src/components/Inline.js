import React from 'react'

//styling css inline of file

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
