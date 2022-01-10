import React, {useState} from 'react'

const ListItems = ({text}) => {
    return <li>{text}</li>
}

const List = ({numberOfItems}) => {
    const listItems= [];

    for (let i=1; i< numberOfItems; i++) listItems.push(<ListItems text={i} />)
    return <ul>{listItems}</ul>
}

const Message = () => {
    const [name, setName] = useState('');
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => alert('Hello, '+ name)}>Click Here</button>
        </div>
    )
}

function DemoDevTools() {
    // const [name, setName] = useState('');
    // Changed to message child for better performance by avoiding rerendering of parent component.
    
    return (
        <div>
            {/* <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => alert('Hello, '+ name)}>Click Here</button> */}
            <Message />

            <List numberOfItems={15} />
        </div>
    )
}

export default DemoDevTools
