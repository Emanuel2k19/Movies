
import { Link } from 'react-router-dom';
import SearchBar from '../Content/SearchBar';
import classes from './Header.module.css';



const Header = () => {
    return (
        <div className={classes.header}>

            <div className={classes.Title}>
                <Link className={classes.link} to="/">
                    <h1>WatchOut</h1>
                </Link>
            </div>

            <SearchBar />

            <div className={classes.topLeftBtn}>
                <ul className={classes.unList}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/">CONTACT</Link></li>
                    <li><Link to="/">ABOUT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
