import { useEffect, useState } from "react";

const firebaseApi = "https://movies-b7b3a-default-rtdb.europe-west1.firebasedatabase.app/";

export async function FetchMovies() {
    const response = await fetch(`${firebaseApi}/Movies.json`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Error");
    }

    const fetchedMovies = []

    for (const key in data) {
        const moviesObj = {
            key: key,
            id: key,
            ...data[key]
        }
        fetchedMovies.push(moviesObj);
    }
    return fetchedMovies;
}

export async function fetchSingleMovie(movieId) {
    const response = await fetch(`${firebaseApi}/Movies/${movieId}.json`)
    const data = response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;

}

export async function fetchCategoreis() {
    const response = await fetch(`${firebaseApi}/Categories.json`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Error");
    }

    return data
}

// export async function fetchMovieByCate(catID) {
//     const response = await fetch(`${firebaseApi}/Categories.json`);
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error(data.message || "Error");
//     }

//     return data
// }