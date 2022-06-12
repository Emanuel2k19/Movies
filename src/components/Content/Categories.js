
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Categories.module.css';
import fetchedCategories from "../../Hooks/fetchCategories"

const Categories = () => {


    const [CategoriesData, setCategoriesData] = useState([])

    async function Categories() {
        const result = await fetchedCategories()
        const CategoriesArray = Object.values(result);
        setCategoriesData(CategoriesArray)
        return CategoriesArray
    }
    useEffect(() => {
        Categories()
    }, [])

    const items = []
    for (const [cat, catVal] of CategoriesData.entries()) {
        items.push(<Link to={`/Movies/Categories/${catVal}`} key={cat}><li>{catVal}</li></Link>)
    }


    return (
        <div className={classes.Categories}>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default Categories;