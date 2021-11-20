import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './navbar.css'

export default function NavBar() {
    const PF = 'http://localhost:8000/images/'
    const {user,dispatch} = useContext(Context)
    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
    }
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
                    <li className='navListItem'><Link className="link" to='#about' onClick={() => {
                        const anchor = document.querySelector('#about');
                        const anchorPosition = anchor.getBoundingClientRect().top;
                        const offset = 45;
                        const offsetPosition = anchorPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                       });
                        }}>ABOUT</Link></li>
                {
                    user ? (
                        <>
                        <li className='navListItem'><Link className="link" to="write">WRITE</Link></li>
                        <li className='navListItem'><Link className="link" to="login" onClick={handleLogout}>LOGOUT</Link></li>
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
                            <img className='navImage' src={PF+user.profilePic} alt="" srcset="" />
                        </Link>
                    }

                {/* <i className="navSearch fas fa-search"></i> */}
            </div>
        </div>
    )
}
