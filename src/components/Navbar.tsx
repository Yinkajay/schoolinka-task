import { FiSettings, FiBell } from "react-icons/fi";
import profileImage from '../assets/Avatar.png'

import navStyles from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={navStyles['nav']}>
            <div className="">
                <h1>ToDo</h1>
            </div>
            <div className={navStyles['info-area']}>
                <FiSettings size='20' color='#667085' />
                <FiBell size='20' color='#667085' />
                <img src={profileImage} alt="" />
            </div>
        </nav>
    )
}

export default Navbar
