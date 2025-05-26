import { NavLink } from 'react-router-dom'
import '../styles/sidebar.css'
import { MdDashboard, MdHistory, MdOutlinePhone } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <h2><span style={{ color: "#81e8ee" }}>Health</span><span style={{ color: "black" }}>care</span></h2>
      <h4 style={{ color: "black" }}>General</h4>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <MdDashboard /> Dashboard
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <MdHistory /> History
        </NavLink>
        <NavLink

          to="/calendar"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <FaCalendarAlt /> Calendar
        </NavLink>
      </nav>
      <h4 style={{ color: "black" }}>Tools</h4>
      <nav>
        <NavLink
          to="/Chat"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <IoChatbubbleEllipsesOutline /> Chat
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <MdOutlinePhone /> Support
        </NavLink>

      </nav>

      <nav className='settings'>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <IoMdSettings /> Settings
        </NavLink>

      </nav>

    </aside>
  )
}

export default Sidebar