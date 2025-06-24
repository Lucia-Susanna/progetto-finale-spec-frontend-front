
import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
const Preferiti = () => {

    const { favourite, removeFavourite } = useGlobalContext()
    return (
        <div className="favourites-container">
            <h2 className="favourites-title">I tuoi percorsi preferiti</h2>
            {favourite.length === 0 ? (
                <p>Nessun itinerario nei preferiti.</p>
            ) : (
                <ul className="favourites-list">
                    {favourite.map(item => (
                        <li key={item.id}>
                            <div>
                                <Link to={`/${item.id}`} className="fav-title">{item.title}</Link>
                                <span className="fav-category">{item.category}</span>
                            </div>
                            <button className="fav-remove-btn" title="Rimuovi dai preferiti" onClick={() => removeFavourite(item.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Preferiti
