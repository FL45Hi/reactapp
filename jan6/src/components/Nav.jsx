import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div >
            <Link to="/">App </Link>
            <Link to="/home">Home </Link>
            <Link to="/About">About </Link>
            <Link to="/Gallery">Gallery</Link>
        </div>
    )
}
