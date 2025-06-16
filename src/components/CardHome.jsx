import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
const CardHome = ({ item }) => {
    const { title, category, id } = item
    const { compareData, toCompare } = useGlobalContext()
    return (

        <div className="card col-5 m-2">
            <Link to={`/${id}`}><h3>{title}</h3></Link>
            <p>{category}</p>
            <button onClick={() => compareData(item)} disabled={toCompare.length === 2 || toCompare.some(el => el.id === item.id)} >aggiungi al comparatore</button>


        </div >
    )
}

export default CardHome
