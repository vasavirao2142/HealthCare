import { useState } from "react"
import { RxAvatar } from "react-icons/rx";
import { RiAddLargeLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import '../styles/header.css'

const Header = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <nav className='nav-bar'>
            <div className="search-container">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search" />
                <FaBell size={30} />
            </div>
            <div className="profile-container">
                <RxAvatar size={30} />
                <div style={{
                    backgroundColor: 'blue',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                }}>
                    <RiAddLargeLine size={20} color="white" />
                </div>
            </div>

        </nav>
    )
}

export default Header