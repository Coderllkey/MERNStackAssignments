import React from 'react'
import { NavLink, Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to={'/'}> <a className={({isactive})=>isactive ? "active" : ''}> Home </a> </NavLink></li>
            <li>
                <NavLink to={'/about'}> <a > About </a>  </NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar