import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const Detail = () => {
    const { mountainRoute, fetchMountainRoute } = useGlobalContext()
    const { id } = useParams()
    const [selectedMountainRoute, setSelectedMountainRoute] = useState(null)

    useEffect(() => {
        if (mountainRoute.length === 0) {
            fetchMountainRoute()
        }
    }, [])

    useEffect(() => {
        if (mountainRoute.length > 0) {
            const mountainRouteId = mountainRoute.find(m => String(m.id) === id)
            setSelectedMountainRoute(mountainRouteId)
        }
    }, [id, mountainRoute])

    if (!selectedMountainRoute) return <p>Caricamento o rotta non trovata...</p>

    return (
        <div>
            <h1>{selectedMountainRoute.title}</h1>
            <p>ID: {selectedMountainRoute.id}</p>
        </div>
    )
}

export default Detail
