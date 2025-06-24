import { useState, useEffect, createContext, useContext, useCallback } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const api_url = import.meta.env.VITE_API_URL

    const [mountainRoute, setMountainRoute] = useState([])
    const [selectedMountainRoute, setSelectedMountainRoute] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [searchCategory, setSearchCategory] = useState('')
    const [isAsc, setIsAsc] = useState(true)
    const [toCompare, setToCompare] = useState([])
    const [favourite, setFavourite] = useState([])
    const fetchMountainRoute = () => {

        axios.get(api_url)
            .then(res => {
                setMountainRoute(res.data)
            })
            .catch(error => {
                console.error("Errore nel fetch:", error)
            })
    }

    const fetchMountainRouteById = (id) => {
        axios.get(`${api_url}/${id}`)
            .then(res => {

                setSelectedMountainRoute(res.data.mountainroute)

            })
            .catch(error => {
                console.error("Errore nel fetch:", error)
            })
    }

    function debounce(callback, delay) {
        let timer
        return (value) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback(value)
            }, delay)
        }
    }

    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    useEffect(() => {
        setSearchResult(
            [...mountainRoute]
                .filter(mountain =>
                    (searchQuery === '' || (mountain.title ?? '').toLowerCase().includes(searchQuery.toLowerCase())) &&
                    (searchCategory === '' || (mountain.category ?? '').toLowerCase() === searchCategory.toLowerCase()))

                .sort((a, b) => {
                    const titleA = (a.title ?? '');
                    const titleB = (b.title ?? '');
                    return isAsc
                        ? titleA.localeCompare(titleB, 'it', { sensitivity: 'base' })
                        : titleB.localeCompare(titleA, 'it', { sensitivity: 'base' });
                })
        );


    }, [searchQuery, searchCategory, mountainRoute, isAsc]);

    const compareData = async (item) => {
        try {
            const res = await axios.get(`${api_url}/${item.id}`);
            // Assumendo che il backend restituisca { mountainroute: { ... } }
            const data = res.data.mountainroute || res.data;
            setToCompare(prev => [...prev, data]);
        } catch (error) {
            console.error("Errore nel fetch per comparazione:", error);
        }
    }

    const removeFromCompare = (id) => {
        setToCompare(prev => prev.filter(item => item.id !== id))
    }

    const isFavourite = (id) => {
        return favourite.some(item => item.id === id);
    };

    const addFavourite = (item) => {
        setFavourite([...favourite, item])
    }

    const removeFavourite = (id) => {
        setFavourite(prev => prev.filter(item => item.id !== id))
    }
    const value = {
        mountainRoute,
        fetchMountainRoute,
        fetchMountainRouteById,
        searchQuery,
        searchResult,
        debounceSearch,
        searchCategory,
        setSearchCategory,
        isAsc,
        setIsAsc,
        setToCompare,
        toCompare,
        compareData,
        removeFromCompare,
        favourite,
        addFavourite,
        removeFavourite,
        isFavourite,
        selectedMountainRoute
    }



    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }