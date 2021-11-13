import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
    const user = false;
    return (
        <div className='nav'>
            <div className="navLeft">
                <i className="navIcon fab fa-facebook-square"></i>
                <i className="navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className='navListItem'><Link className="link" to="/">HOME</Link></li>
                    <li className='navListItem'><Link className="link" to='/' onClick={() => {
                        const anchor = document.querySelector('#about')
                        anchor.scrollIntoView({ behavior: 'smooth' })
                        }}>ABOUT</Link></li>
                {
                    user ? (
                        <>
                        <li className='navListItem'><Link className="link" to="write">WRITE</Link></li>
                        <li className='navListItem'><Link className="link" to="login">LOGOUT</Link></li>
                        </>
                    ):(
                        <>
                        <li className='navListItem'><Link className="link" to="login">LOGIN</Link></li>
                        <li className='navListItem'><Link className="link" to="register">REGISTER</Link></li>
                        </>
                    )
                }
                </ul>
            </div>
            <div className="navRight">
                   { user &&
                        <Link className="link navImgWrap" to="setting">
                            <img className='navImage' src="/images/profile-picture1.jpg" alt="" srcset="" />
                        </Link>
                    }

                <i className="navSearch fas fa-search"></i>
            </div>
        </div>
    )
}
