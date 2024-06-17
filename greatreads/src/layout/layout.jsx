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
                </ul>
            </nav>
        </header>
        <Outlet> </Outlet>
        </>
    )
}