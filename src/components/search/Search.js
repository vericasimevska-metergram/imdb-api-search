import { useState } from 'react';
import { AllMovies } from '../AllMovies';
import './style.css'

export function Search() {
    const [movies, setMovies] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);

    function getData() {
        document.getElementById('loading').style.visibility = 'visible';
        var myInput = document.getElementById("myInput").value;
        var url = `https://imdb-api.com/en/API/Search/k_sf83blu8/${myInput}`
        // setIsLoading(true);
        // console.log(isLoading)
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovies(data.results)
                // setIsLoading(false)
                document.getElementById('loading').style.visibility = 'hidden';
            })

    }

    return (
        <>
            <div>
                <input type="text" id="myInput" placeholder="Search..."></input>
                <button onClick={getData} type="submit">Search</button>
                {movies && <AllMovies movies={movies} />}
            </div>
            {/* {isLoading ? <div className="loader" /> : movies && <AllMovies movies={movies} />} */}
            <div id="loading" className="loader">Loading...</div>
        </>
    )
}