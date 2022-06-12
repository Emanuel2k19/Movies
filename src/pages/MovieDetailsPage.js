import MovieDetails from "../components/Content/MovieDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchedMovie from '../Hooks/fetchSingleMovie'
import PageNotFound from "../components/Content/PageNotFound";

const MovieDetailsPage = () => {
    const [MovieData, setMovieData] = useState(null)
    const [isIdValid, setIsIdValid] = useState(false);

    const MovieId = useParams()
    async function Movie(MovieId) {
        const id = MovieId.movie
        const result = await FetchedMovie(id)
        if (result === null) {
            setIsIdValid(false)
            return;
        }
        else {
            setIsIdValid(true)
            setMovieData(result)
            return result
        }
    }

    useEffect(() => {
        Movie(MovieId)
    }, [])

    if (!isIdValid) {
        return <PageNotFound movie={MovieId}/>
    }
    return MovieData && <MovieDetails Movie={MovieData} id={MovieId.movie}/>
}

export default MovieDetailsPage;