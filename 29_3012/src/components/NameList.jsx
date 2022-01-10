import React from 'react'

/*
Arrays.map( (arg) => <Component key={} props={arg})
Arrays.map( (arg, index) => <h2 key={index} props={arg}> {index}{name} </h2>)
index as key.
*/

const Person = (props) => {
    const persons = props.person;
    console.log(persons)

    return (
        <div>
            <p><strong>Name: {persons.name}. Age: {persons.age}. Skill: {persons.skill} </strong></p>
        </div>
    )
}

function NameList() {

    const Persons = [
        {
            id: 1,
            name: 'krishna',
            age: 22,
            skill: 'React'
        },
        {
            id: 2,
            name: 'moin',
            age: 22,
            skill: 'Salesforce'
        },
        {
            id: 3,
            name: 'priyesh',
            age: 20,
            skill: 'Java'
        }
    ]

    // const personList = Persons.map(person => {
    //     return <p><strong>Name: {person.name}. Age: {person.age}. Skill: {person.skill} </strong></p>
    // })

    const personList = Persons.map((p) => <Person key={p.id.toString()} person={p} />)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
