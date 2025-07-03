import { useGlobalContext } from "../context/GlobalContext"
import { Link, useNavigate } from "react-router-dom"

const Favourites = () => {
    const { favourite, removeFavourite } = useGlobalContext()
    const navigate = useNavigate();

    return (
        <div className="favourites-container relative" >
            <h2 className="favourites-title">I tuoi preferiti</h2>
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
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
                title="Torna indietro"
            >
                <i className="fa-solid fa-arrow-left"></i>
            </button>
        </div>
    )
}

export default Favourites
