import shikanoko from '../../Assets/shikanoko-nokonoko-koshitantan.gif'
import style from './Home.module.css'
const Home = () => {
    return (
        <div className={style.content} >
            <img src={shikanoko}/>
        </div>
    );
}

export default Home;