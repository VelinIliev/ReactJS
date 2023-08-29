import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContexts';

export const Header = () => {
    const { token, userEmail } = useContext(AuthContext)

    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <span>{userEmail}</span>
            <nav>
                <Link to="/catalogue">All games</Link>
                {/* <!-- Logged-in users --> */}
                {token && (
                    <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                {/* <!-- Guest users --> */}
                {!token && (
                    <div id="guest">
                        <Link to="login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}

            </nav>
        </header>
    )
}

