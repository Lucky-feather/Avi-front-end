import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import DefaultBirdPhoto from '../../assets/branding/AVI-nav-logo.svg'

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
      {/* <li><NavLink to="/changePassword">Change Password</NavLink></li> */}
      </>
    </ul>
  )

  return (
    <nav className={styles.nav}>
      {/* <NavNavLink to={'/'}><img src={Logo} alt="Logo" /></NavNavLink> */}
      {user?  protectedLinks : publicLinks}
    </nav>
  )
}


export default NavBar


// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBBtn,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavExternal2, setShowNavExternal2] = useState(false);

//   return (
//     <>
//       <MDBNavbar>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type='button'
//             data-target='#navbarToggleExternalContent'
//             aria-controls='navbarToggleExternalContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavExternal2(!showNavExternal2)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//         </MDBContainer>
//       </MDBNavbar>

//       <MDBCollapse show={showNavExternal2}>
//         <div className='bg-light shadow-3 p-4'>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//           <li><NavLink to={`/profiles/${user.profile}`}>   Welcome, {user ? user.name.toUpperCase() : 'Birder'}</NavLink></li>
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             <li><NavLink to="/profiles">BIRDERS</NavLink></li>
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             <li><NavLink to="/birds">BIRDS</NavLink></li>
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             <li><NavLink to="/supplylists">SUPPLY LISTS</NavLink></li>
//           </MDBBtn>
//             <li><NavLink to="/events">EVENTS</NavLink></li>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             <li><NavLink to="/questions">FIELD NOTES</NavLink></li>
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='link'>
//             <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
//           </MDBBtn>
//         </div>
//       </MDBCollapse>
//     </>
//   );
// }
