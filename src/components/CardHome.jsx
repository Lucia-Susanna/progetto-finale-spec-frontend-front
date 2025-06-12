import { Link } from "react-router-dom"
const CardHome = ({ item }) => {
    const { title, category, id } = item
    return (
        <Link to={`/${id}`} className="card col-5 m-2">
            <h3>{title}</h3>
            <p>{category}</p>
            <button>aggiungi al comparatore</button>
        </Link>
    )
}

export default CardHome
