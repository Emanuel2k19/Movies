import classes from './MovieCategoris.module.css';
import React from 'react'

export default function MovieCategoris(props) {
    const Categories = props.Categories
    return (
        <div >
            <ul className={classes.Cat_li}>
                {Categories.map((cat) =>
                    <li key={cat}>{cat}</li>
                )}
            </ul>
        </div>
    )
}
