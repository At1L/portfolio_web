import styles from './Contacts.module.css'
import info_icon from '../../Assets/info_icon.png'

const Contacts = () => {
    return (
        <div className={styles.all_links_wrapper}>
            <div className={styles.link_wrapper}>
                <a href="https://www.youtube.com/watch?v=ZZvIVRQ4E7I" target="_blank" className={styles.link}>
                    Instagram
                </a>  
            </div>
            
            <div className={styles.link_wrapper}>
                <a href="https://www.youtube.com/watch?v=ZZvIVRQ4E7I" target="_blank" className={styles.link}>
                    X
                </a>  
            </div>
            <div className={styles.link_wrapper}>
                <a href="https://github.com/At1L" target="_blank" className={styles.link}>
                    Git Hub
                </a>  
            </div>
        </div>
    );
}

export default Contacts;