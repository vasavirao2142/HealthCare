import {  NavLink } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <h2>Dashboard</h2>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/users" 
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Users
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          Settings
        </NavLink>
      </nav>

    </aside>
  )
}

export default Sidebar