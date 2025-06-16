import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import CardHome from "../components/CardHome"

const Home = () => {
    const { fetchMountainRoute, searchResult, debounceSearch, setSearchCategory, setIsAsc, isAsc, toCompare } = useGlobalContext()

    useEffect(() => {
        fetchMountainRoute()
    }, [])

    return (
        <>
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
            <div className="row">
                <div className="col-6">
                    <p>confronta i seguenti itinerari: </p>
                    <ul>
                        {toCompare?.map(item => (<li key={item.id}>{item.title}</li>))}
                    </ul>
                </div>
                <div className="col-6">
                    {toCompare.length === 2 && <Link to='/compare'> vai al comparatore</Link>}
                </div>
            </div>
            <div className="row">
                {searchResult.map(mountain => (
                    <CardHome key={mountain.id} item={mountain} />
                ))}
            </div>
        </>
    )
}

export default Home
