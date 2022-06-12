

import Categories from '../Content/Categories';
import Header from './Header';
import classes from './Main.module.css';

const Main = (props) => {

    return (
        <div className={classes.Main}>
            <Header />
            <Categories />
            <main>{props.children}</main>
        </div>
    )
}

export default Main;