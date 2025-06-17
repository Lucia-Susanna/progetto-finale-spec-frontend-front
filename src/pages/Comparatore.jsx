import { useGlobalContext } from "../context/GlobalContext";

const Comparatore = () => {
    const { toCompare, setToCompare } = useGlobalContext();

    if (toCompare.length !== 2) {
        return <p>Seleziona due itinerari dalla homepage per confrontarli.</p>;
    }

    const removeFromCompare = (id) => {
        setToCompare(prev => prev.filter(item => item.id !== id));
    };

    const keysToCompare = ['title', 'category', 'duration', 'altitude', 'difficulty']; // personalizza

    return (
        <div className="comparator">
            <h2>Confronto itinerari</h2>
            <div className="comparator-table">
                <div className="comparator-row header">
                    <div>Caratteristica</div>
                    <div>{toCompare[0].title}</div>
                    <div>{toCompare[1].title}</div>
                </div>
                {keysToCompare.map(key => (
                    <div className="comparator-row" key={key}>
                        <div>{key}</div>
                        <div>{toCompare[0][key] || '—'}</div>
                        <div>{toCompare[1][key] || '—'}</div>
                    </div>
                ))}
                <div className="comparator-row">
                    <div>Azioni</div>
                    <div><button onClick={() => removeFromCompare(toCompare[0].id)}>Rimuovi</button></div>
                    <div><button onClick={() => removeFromCompare(toCompare[1].id)}>Rimuovi</button></div>
                </div>
            </div>
        </div>
    );
};

export default Comparatore