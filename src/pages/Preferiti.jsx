import { useGlobalContext } from "../context/GlobalContext"
const Preferiti = () => {

    const { favourite } = useGlobalContext()
    return (
        <div>
            {favourite?.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default Preferiti
