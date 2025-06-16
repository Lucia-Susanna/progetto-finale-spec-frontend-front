import { useGlobalContext } from "../context/GlobalContext"
const Comparatore = () => {
    const { toCompare } = useGlobalContext()
    return (
        <div className="row">
            {toCompare.map(e => (
                <div className="col-6" key={e.id}>{e.title}</div>
            ))}
        </div>
    )
}

export default Comparatore
