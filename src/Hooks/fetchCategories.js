import { fetchCategoreis } from '../lib/api'


export default async function fetchedCategories() {
    const result = await fetchCategoreis()
    return (result)
}