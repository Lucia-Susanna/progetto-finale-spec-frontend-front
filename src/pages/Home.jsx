import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardHome from "../components/CardHome"
const Home = () => {
    const { mountainRoute, fetchMountainRoute, searchResult, searchQuery, searchCategory } = useGlobalContext()

    const dataToRender = searchQuery || searchCategory ? searchResult : mountainRoute

    useEffect(() => {
        fetchMountainRoute()
    }, [])



    return (
        <div className="row">
            {dataToRender.map(mountain => <CardHome key={mountain.id} item={mountain} />)}
        </div>
    )
}

export default Home
