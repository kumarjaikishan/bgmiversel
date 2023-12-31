import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({setmodal}) => {
  return (
    <>
      <div className='nav'>
        <div>
          <span className='log'><img src={logo} alt="" /></span>
          <span className='heading'><h2>DOZ GamePlayz</h2></span>
        </div>
        <div className='li'>
          <ul>
            <li> <NavLink to='/' className={"hit"}> Registration </NavLink></li>
            <li> <NavLink to='/admin' className={"hit"}> Admin </NavLink></li>
            {/* <li> <NavLink to='/instant' className={"hit"}> Instant Match </NavLink></li> */}
            <li onClick={()=> setmodal(true)}><b>Rule</b></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar