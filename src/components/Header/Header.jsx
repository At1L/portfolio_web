import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return(
        <nav className={styles.header}>
            <div>
                <NavLink to='/'>
                    <img src='https://sun9-78.userapi.com/impg/a0T-l71_eLBlL0tDBsspEGc7efEbRHU6meFxyw/RhGIUCzThYs.jpg?size=200x267&quality=96&sign=88178f7e1940f7e2d487fcf6a80cf2c2&c_uniq_tag=Y4wSwc60xrSVq5y1HgNzrlCcWbHRcjulf_UHCFMn8vg&type=album'></img>
                </NavLink>
            </div>
            <div className={styles.item}>
                    <NavLink to='/contacts' className={styles.links}>Contacts</NavLink>
            </div>
            <div className={styles.item}>
                    <NavLink to='/about' className={styles.links}>About</NavLink>
            </div>
        </nav>
    );
}

export default Header;