import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Toriq', 'Edo', 'Willy', 'Toriq']
    const persons = [
        {
            id: 1,
            name: 'Toriq',
            age: 22
        },
        {
            id: 2,
            name: 'Edo',
            age: 21
        },
        {
            id: 3,
            name: 'Willy',
            age: 24
        }
    ]
    // key is for unique passing list of array
    // const personList = persons.map((person) => 
    //     <Person key={person.id} person={person} />
    // )

    const nameList = names.map((name, key) => 
        <h2 key={key}>{name}</h2>
    )

    return <div>{nameList}</div>
}

export default NameList
