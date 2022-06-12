import Card from '../UI/Card';
import classes from './MovieDetails.module.css';
import MovieCategoris from './MovieCategoris';
import ReactPlayerProps from "react-player";

const MovieDetails = (props) => {

    const Movie = props.Movie
    const id = props.id
    const CategoriesObj = Movie.Categories
    const CategoriesArray = Object.values(CategoriesObj);
    return (
        <Card>
            <div key={id}>
                <div className={classes.VideoPlayer}>
                    <ReactPlayerProps
                        controls
                        volume={1}
                        muted={false}
                        width={"100%"}
                        height={"100%"}
                        url={Movie.Video}

                    />
                </div>
                <div className={classes.DetailsBox}>
                    <div className={classes.Details}>
                        <div className={classes.Title}>
                            <img src={Movie.Image} />
                        </div>
                        <div className={classes.MovDet}>
                            <h3>{Movie.Title}</h3>
                            <ul>
                                <li>Duration: <label>{Movie.Duration}</label></li>
                                <li>Quality: <label>HD 720</label></li>
                                <li>release date: <label>{Movie.Year}</label></li>
                                <li>IMBb: <label>{Movie.Rate}</label></li>
                            </ul>
                            <h5>Categories</h5>
                            <MovieCategoris Categories={CategoriesArray} />
                        </div>
                        <div className={classes.Desc}>
                            <p> {Movie.Description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default MovieDetails;