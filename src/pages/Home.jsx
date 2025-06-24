import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import CardHome from "../components/CardHome"

const Home = () => {
    const { fetchMountainRoute, searchResult, debounceSearch, setSearchCategory, setIsAsc, isAsc, toCompare } = useGlobalContext()

    useEffect(() => {
        fetchMountainRoute()
    }, [])

    return (
        <>
            <div className="searchbar ">
                <div className="container">
                    <div className="row">
                        <div className="my-2 col-md-6">
                            <label htmlFor="ricerca">Cerca un itinerario: </label>
                            <input
                                name="ricerca"
                                id="ricerca"
                                type="text"
                                onChange={(e) => debounceSearch(e.target.value)}
                            />
                        </div>
                        <div className="my-2 col-md-6">

                            <label htmlFor="categoria"> Seleziona una categoria: </label>
                            <select name="categoria" id="categoria" onChange={(e) => setSearchCategory(e.target.value)}>
                                <option value="">Qualsiasi</option>
                                <option value="trekking">Trekking</option>
                                <option value="ferrata">Ferrata</option>
                                <option value="escursionismo">Escursionismo</option>
                                <option value="alpinismo">Alpinismo</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="compare">

                    <div className="d-flex">
                        <p>{toCompare.length === 2 ? 'Confronta i seguenti itinerari: ' : 'Seleziona due itinerari per confrontarli'} </p>
                        <ul className="d-flex">
                            {toCompare?.map(item => (<li key={item.id} className="me-2">{item.title}</li>))}
                        </ul>
                    </div>

                    <div className="d-flex justify-content-center my-3">
                        {toCompare.length === 2 && <Link to='/compare' className="button-comparatore"> vai al comparatore</Link>}
                    </div>
                </div>


                <div className="d-flex order p-3 justify-content-end">
                    <p>Ordina risultati per:</p>
                    <button onClick={() => setIsAsc(prev => !prev)}>
                        {isAsc ? "A-Z" : "Z-A"}
                    </button>

                </div>
                <div className="row">
                    {searchResult.map(mountain => (
                        <CardHome key={mountain.id} item={mountain} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
