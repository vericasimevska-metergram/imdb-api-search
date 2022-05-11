import { useState } from 'react';
import { AllMovies } from '../AllMovies';
import './style.css'

export function Search() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");

    function handleChange(newQuery) {
        setQuery(newQuery);
    }

    function getData() {
        var url = `https://imdb-api.com/en/API/Search/k_sf83blu8/${query}`
        setIsLoading(true);

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data.results)
                setIsLoading(false)
            })

    }

    return (
        <>
            <div>
                <input type="text" placeholder="Search..." onChange={(e) => handleChange(e.target.value)} ></input>
                <button onClick={getData} type="submit">Search</button>
            </div>

            {isLoading ? <div className="loader" /> : <AllMovies movies={movies} />}
        </>
    )
}