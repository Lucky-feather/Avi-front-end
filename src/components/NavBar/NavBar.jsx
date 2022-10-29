import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import DefaultBirdPhoto from '../../assets/branding/AVI-nav-logo.png'

const NavBar = ({ user, handleLogout}) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul >
      <>
      <NavLink to="/"><img src={DefaultBirdPhoto} alt="logo" style={{width: "55px"}}/></NavLink>
      <h2 className={styles.landing}><NavLink to={`/profiles/${user?.profile}`}>   Welcome, {user ? user.name.toUpperCase() : 'Birder'}</NavLink></h2>
      <li ><NavLink to="/birds">BIRDS</NavLink></li>
      <li ><NavLink to="/profiles">BIRDERS</NavLink></li>
      <li ><NavLink to="/supplylists">SUPPLY LISTS</NavLink></li>
      <li ><NavLink to="/events">EVENTS</NavLink></li>
      <li ><NavLink to="/questions">FIELD NOTES</NavLink></li>
      <li ><NavLink to="/" onClick={handleLogout}>LOG OUT</NavLink></li>
      </>
    </ul>
  )

  return (
    <nav className={styles.nav}>
      {user?  protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar