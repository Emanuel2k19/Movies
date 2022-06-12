import React from 'react'
import classes from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={classes.SearchBox}>
      <input className={classes.SearchInput} type='text' placeholder='search....'/>
    </div>
  )
}

export default SearchBar