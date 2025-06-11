import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardHome from "../components/CardHome"

const Home = () => {
    const { fetchMountainRoute, searchResult } = useGlobalContext()

    useEffect(() => {
        fetchMountainRoute()
    }, [])

    return (
        <div className="row">
            {searchResult.map(mountain => (
                <CardHome key={mountain.id} item={mountain} />
            ))}
        </div>
    )
}

export default Home
