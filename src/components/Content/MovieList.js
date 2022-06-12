import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import classes from './MovieList.module.css';


 const MovieList = (props) => {

    const Movies = props.Movies;

    return (
        <Card>
            {Movies.map((movie) => (
                <div className={classes.Content} key={movie.key} >
                    <div >
                        <Link className={classes.img} to={`/Movies/${movie.id}`}>
                            <img src={movie.Image} alt={movie.Title} />
                            <div>{movie.Title}</div>
                        </Link>
                    </div>
                </div>
            ))}
        </Card>
    )
}

export default MovieList;