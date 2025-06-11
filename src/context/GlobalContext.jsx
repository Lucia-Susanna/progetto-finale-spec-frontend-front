import { useState, useEffect, createContext, useContext, useCallback } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const api_url = import.meta.env.VITE_API_URL

    const [mountainRoute, setMountainRoute] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [searchCategory, setSearchCategory] = useState('')
    const fetchMountainRoute = () => {
        axios
            .get(api_url)
            .then((res) => {
                setMountainRoute(res.data)
            })
            .catch((error) => console.error("Errore nel fetch:", error));
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
        const filtered = mountainRoute.filter(mountain =>
            (searchQuery === '' || mountain.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (searchCategory === '' || mountain.category?.toLowerCase() === searchCategory.toLowerCase())
        );

        setSearchResult(filtered);
    }, [searchQuery, searchCategory, mountainRoute]);

    const value = {
        mountainRoute,
        fetchMountainRoute,
        searchQuery,
        searchResult,
        debounceSearch,
        searchCategory,
        setSearchCategory

    }



    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }