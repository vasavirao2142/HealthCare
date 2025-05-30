import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import '../styles/layout.css'



const Layout: React.FC = () => {
  return (

    <div className='dashboard'>
      <Sidebar />
      <div className='main-section'>
        <Header />
        <main className='main-content'>
          <Outlet />
        </main>

      </div>
    </div>

  )
}

export default Layout