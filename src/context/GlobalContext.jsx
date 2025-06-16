import { useState, useEffect, createContext, useContext, useCallback } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const api_url = import.meta.env.VITE_API_URL

    const [mountainRoute, setMountainRoute] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [searchCategory, setSearchCategory] = useState('')
    const [isAsc, setIsAsc] = useState(true)
    const [toCompare, setToCompare] = useState(() => {
        // Recupera da localStorage se presente, altrimenti array vuoto
        const stored = localStorage.getItem('toCompare');
        return stored ? JSON.parse(stored) : [];
    })

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


    const compareData = (item) => {
        setToCompare([...toCompare, item])
    }

    useEffect(() => {
        localStorage.setItem('toCompare', JSON.stringify(toCompare));
    }, [toCompare]);


    const value = {
        mountainRoute,
        fetchMountainRoute,
        searchQuery,
        searchResult,
        debounceSearch,
        searchCategory,
        setSearchCategory,
        isAsc,
        setIsAsc,
        setToCompare,
        toCompare,
        compareData

    }



    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }