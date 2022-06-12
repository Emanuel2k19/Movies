import { useEffect, useState } from "react";
import MovieList from "../components/Content/MovieList";
import FetchedMovies from '../Hooks/fetchAllMovies'

const MoviesPage = () => {
    const [MoviesData, setMoviesData] = useState([])

    async function Movies() {
        const result = await FetchedMovies()
        setMoviesData(result)
        return result
    }
    useEffect(() => {
        Movies()
    }, [])
    console.log(MoviesData)
    return MoviesData && <MovieList  Movies={MoviesData} />
}

export default MoviesPage;
