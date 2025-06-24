import { useGlobalContext } from "../context/GlobalContext"

const LABELS = {
    title: "Titolo",
    category: "Categoria",
    difficulty: "Difficoltà",
    region: "Regione",
    altitude: "Altitudine (m)",
    lengthKm: "Lunghezza (km)",
    elevationGain: "Dislivello (m)",
    duration: "Durata",
    bestSeason: "Stagione migliore",
    equipment: "Attrezzatura",
    description: "Descrizione"
};

const FIELDS = [
    "title",
    "category",
    "difficulty",
    "region",
    "altitude",
    "lengthKm",
    "elevationGain",
    "duration",
    "bestSeason",
    "equipment",
    "description"
];

const Compare = () => {
    const { toCompare } = useGlobalContext();

    if (!toCompare || toCompare.length < 2) {
        return (
            <div className="container">
                <div className="compare-table-wrapper">
                    <p>Seleziona due itinerari per confrontarli.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="compare-table-wrapper">
                <table className="compare-table">
                    <thead>
                        <tr className="compare-table-header">
                            <th className="compare-th">Caratteristica</th>
                            <th className="compare-th">{toCompare[0].title}</th>
                            <th className="compare-th">{toCompare[1].title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FIELDS.map(field => (
                            <tr className="compare-table-row" key={field}>
                                <td className="compare-label">{LABELS[field]}</td>
                                <td className="compare-value">
                                    {field === "equipment"
                                        ? (Array.isArray(toCompare[0][field]) && toCompare[0][field].length > 0
                                            ? toCompare[0][field].join(", ")
                                            : "Nessuna attrezzatura")
                                        : toCompare[0][field]}
                                </td>
                                <td className="compare-value">
                                    {field === "equipment"
                                        ? (Array.isArray(toCompare[1][field]) && toCompare[1][field].length > 0
                                            ? toCompare[1][field].join(", ")
                                            : "Nessuna attrezzatura")
                                        : toCompare[1][field]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Compare
