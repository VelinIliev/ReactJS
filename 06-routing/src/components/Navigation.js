import styles from './Navigation.module.css'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li><Link to='/'><button>Home</button></Link></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? "red" : "white" })} to='/about'>About</NavLink></li>
            <li><NavLink className={({isActive}) => isActive && styles['nav-active']} to='/characters'>Characters</NavLink></li>

        </ul>
    )
}
export default Navigation