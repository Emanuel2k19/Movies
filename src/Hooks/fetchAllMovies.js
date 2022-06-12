
import { FetchMovies } from '../lib/api';

export default async function FetchedMovies() {
    const result = await FetchMovies()
    return result;

}