import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const CardHome = ({ item }) => {
    const { title, category, id } = item
    const { compareData, removeFromCompare, toCompare, addFavourite, removeFavourite, isFavourite } = useGlobalContext()

    const isSelected = toCompare.some(el => el.id === item.id)
    const isFav = isFavourite(item.id);

    return (
        <div className="card col-5 m-2">
            <button className="favourite" onClick={() => isFav ? removeFavourite(item.id) : addFavourite(item)}>
                {isFav ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </button>
            <Link to={`/${id}`}><h3>{title}</h3></Link>
            <p>{category}</p>
            <button
                className={isSelected ? "selected-btn" : ""}
                onClick={() => isSelected ? removeFromCompare(item.id) : compareData(item)}
                disabled={!isSelected && toCompare.length === 2}
            >
                {isSelected ? "Rimuovi dal comparatore" : "Aggiungi al comparatore"}
            </button>
        </div>
    )
}

export default CardHome
