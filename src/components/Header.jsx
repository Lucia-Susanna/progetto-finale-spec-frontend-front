import { Link } from "react-router-dom"

const Header = () => {
    return (

        <header className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center">
            <h1 className="m-0">TrekChecker</h1>

            <nav className="d-flex justify-content-center">
                <Link to="/">Home</Link>
                <Link to="/favourites">Preferiti</Link>
            </nav>
        </header>

    )
}

export default Header
