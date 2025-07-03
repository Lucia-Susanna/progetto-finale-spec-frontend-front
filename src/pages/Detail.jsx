import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Detail = () => {
    const { fetchMountainRouteById, selectedMountainRoute, addFavourite, removeFavourite, isFavourite } = useGlobalContext()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchMountainRouteById(id)
    }, [id])

    if (!selectedMountainRoute) {
        return (
            <div className="container detail-loading">
                <div>Caricamento...</div>
            </div>
        )
    }
    const isFav = isFavourite(selectedMountainRoute.id);

    return (
        <div className="container" style={{ position: "relative" }}>
            <div className="card detail-card">
                <button className="favourite" onClick={() => isFav ? removeFavourite(selectedMountainRoute.id) : addFavourite(selectedMountainRoute)}>
                    {isFav ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </button>
                <h2 className="card-title">{selectedMountainRoute.title}</h2>
                <div className="card-category">{selectedMountainRoute.category}</div>

                <div className="detail-grid">
                    <div>
                        <span className="detail-label">Difficoltà:</span>
                        <span className="detail-value">{selectedMountainRoute.difficulty}</span>
                    </div>
                    <div>
                        <span className="detail-label">Regione:</span>
                        <span className="detail-value">{selectedMountainRoute.region}</span>
                    </div>
                    <div>
                        <span className="detail-label">Altitudine:</span>
                        <span className="detail-value">{selectedMountainRoute.altitude} m</span>
                    </div>
                    <div>
                        <span className="detail-label">Lunghezza:</span>
                        <span className="detail-value">{selectedMountainRoute.lengthKm} km</span>
                    </div>
                    <div>
                        <span className="detail-label">Dislivello:</span>
                        <span className="detail-value">{selectedMountainRoute.elevationGain} m</span>
                    </div>
                    <div>
                        <span className="detail-label">Durata:</span>
                        <span className="detail-value">{selectedMountainRoute.duration}</span>
                    </div>
                    <div>
                        <span className="detail-label">Stagione migliore:</span>
                        <span className="detail-value">{selectedMountainRoute.bestSeason}</span>
                    </div>
                    <div>
                        <span className="detail-label">Attrezzatura:</span>
                        <span className="detail-value">
                            {Array.isArray(selectedMountainRoute.equipment) && selectedMountainRoute.equipment.length > 0
                                ? selectedMountainRoute.equipment.join(", ")
                                : "Nessuna attrezzatura"}
                        </span>
                    </div>
                </div>
                <div className="detail-description">
                    <span className="detail-label detail-description-label">Descrizione:</span>
                    <p>{selectedMountainRoute.description}</p>
                </div>
            </div>
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

export default Detail
