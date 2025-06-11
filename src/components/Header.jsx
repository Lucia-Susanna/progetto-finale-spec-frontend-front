import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
const Header = () => {

    const { debounceSearch, setSearchCategory, setIsAsc, isAsc } = useGlobalContext()
    return (
        <header>
            <div>
                <Link to='/'>Home</Link>
            </div>

            <div className="searchbar">
                <input
                    type="text"
                    onChange={(e) => debounceSearch(e.target.value)}
                />
                <label htmlFor="categoria"> Seleziona una categoria: </label>
                <select name="categoria" id="categoria" onChange={(e) => setSearchCategory(e.target.value)}>
                    <option value="">Qualsiasi</option>
                    <option value="trekking">Trekking</option>
                    <option value="ferrata">Ferrata</option>
                    <option value="escursionismo">Escursionismo</option>
                    <option value="alpinismo">Alpinismo</option>
                </select>
                <button onClick={() => setIsAsc(prev => !prev)}>
                    {isAsc ? "A-Z" : "Z-A"}
                </button>
            </div>
        </header>
    )
}

export default Header
