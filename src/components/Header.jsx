import { Link } from "react-router-dom"
const Header = () => {


    return (
        <header>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favourites'>Preferiti</Link>
            </div>

        </header>
    )
}

export default Header
