import {Outlet, Link} from 'react-router-dom'

export function Layout() {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                    <li>
                        <Link to="/retrieve">Retrieve</Link>
                    </li>
                    <li>
                        <Link to="/delete">Delete</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet> </Outlet>
        </>
    )
}