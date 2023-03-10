import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // we should delegate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <nav>
            <Link to="/notes">Notes</Link>
            &nbsp; | &nbsp;
            <Link to="/notes/new">New Note</Link>
            &nbsp; | &nbsp;
            <span>Hello there, { user.name }</span>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}