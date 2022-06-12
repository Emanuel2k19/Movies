import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import classes from './PageNotFound.module.css';

function PageNotFound(props) {
  const movie = props.movie.movie
  return (
    <Card>
      <h2>Sorry the movie <label>{movie}</label> was not found!</h2>
      <Link to="/Movies" className={classes.redir} >Home</Link>
    </Card>

  )
}

export default PageNotFound