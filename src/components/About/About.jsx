import clown from '../../Assets/clown.jpg'
import style from './About.module.css'
const About = () => {
    return (
        <div className={style.content} >
            <h2>Everything you need to know about me:</h2>
            <img src={clown} width={500}/>
        </div>
    );
}

export default About;