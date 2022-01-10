import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h5>Count - {count}</h5>
            <button onClick={() => setCount(count+1)}>Update</button>
        </div>
    )
}

function HOCRed(props) {
    return <h6 style={{backgroundColor: 'coral', width: '20%'}}><props.comp /></h6>
}
function HOCBlue(props) {
    return <h6 style={{backgroundColor: 'aqua', width: '20%'}}><props.comp /></h6>
}


export default function SimpleDemo() {
    return (
        <div>
            <HOCRed comp={Counter}></HOCRed>
            <HOCBlue comp={Counter}></HOCBlue>
        </div>
    )
}


