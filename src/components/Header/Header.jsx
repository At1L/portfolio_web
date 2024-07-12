import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import home from '../../Assets/home.png'

const Header = () => {
    return(
        <nav className={styles.header}>
            <div>
                <NavLink to='/'>
                    <img src={home}></img>
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