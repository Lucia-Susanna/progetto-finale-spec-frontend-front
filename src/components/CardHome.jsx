
const CardHome = ({ item }) => {
    const { title, category } = item
    return (
        <div className="card col-5 m-2">
            <h3>{title}</h3>
            <p>{category}</p>

        </div>
    )
}

export default CardHome
