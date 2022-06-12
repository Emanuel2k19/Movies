import React from 'react'
import MovieList from '../components/Content/MovieList'
import { useEffect, useState } from "react";
import FetchedMovies from '../Hooks/fetchAllMovies'
import { useParams } from 'react-router-dom';

function CategoriesPage() {
  const { cate } = useParams()
  const [MoviesData, setMoviesData] = useState([])

  async function Movies() {
    const result = await FetchedMovies()
    const a = result[0].Categories["c6"]
    console.log(a)
    console.log(cate)
    const fetchedMovies = []
    for (const key in result) {
      if (cate === a) {
        const moviesObj = {
          ...result[key]
        }
        fetchedMovies.push(moviesObj);
      }
      else {}
    }
    console.log(fetchedMovies)


    setMoviesData(fetchedMovies)
    return fetchedMovies
  }
  useEffect(() => {
    Movies()
  }, [cate])

  return (MoviesData && <MovieList Movies={MoviesData} />)
}

export default CategoriesPage