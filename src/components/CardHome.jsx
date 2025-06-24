import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"

const CardHome = ({ item }) => {
    const { title, category, id } = item
    const { compareData, removeFromCompare, toCompare, addFavourite, removeFavourite, isFavourite } = useGlobalContext()

    const isSelected = toCompare.some(el => el.id === item.id)
    const isFav = isFavourite(item.id);

    const handleCompare = async () => {
        if (isSelected) {
            removeFromCompare(item.id)
        } else {
            await compareData(item)
        }
    }

    return (
        <div className="col-md-6 text-center">
            <div className="card">
                <button className="favourite" onClick={() => isFav ? removeFavourite(item.id) : addFavourite(item)}>
                    {isFav ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
                <Link to={`/${id}`}><h3>{title}</h3></Link>
                <p className="category">{category}</p>
                <button
                    className={isSelected ? "selected-btn" : ""}
                    onClick={handleCompare}
                    disabled={!isSelected && toCompare.length === 2}
                >
                    {isSelected ? "Rimuovi dal comparatore" : "Aggiungi al comparatore"}
                </button>
            </div>
        </div>
    )
}

export default CardHome
