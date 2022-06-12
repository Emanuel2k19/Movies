
import { useState, useEffect } from "react";
import { fetchSingleMovie } from "../lib/api";

export default async function FetchedMovie(movieId) {
    const result = await fetchSingleMovie(movieId)
    return result;

}
