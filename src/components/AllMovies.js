import { Movie } from './Movie.js'

export function AllMovies({ movies }) {
    return (
        movies.map((movie) => (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                description={movie.description}
            />

        ))

    )
}