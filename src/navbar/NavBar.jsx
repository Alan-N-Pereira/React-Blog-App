import './navbar.css'

export default function NavBar() {
    return (
        <div className='nav'>
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className='navListItem'>HOME</li>
                    <li className='navListItem'>ABOUT</li>
                    <li className='navListItem'>CONTACT</li>
                    <li className='navListItem'>WRITE</li>
                    <li className='navListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className="navRight">
                <img className='navImage' src="/images/profile-picture1.jpg" alt="" srcset="" />
                <i className="navSearch fas fa-search"></i>
            </div>
        </div>
    )
}
