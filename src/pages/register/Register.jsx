import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
        <div className='register'>
            <div className="registerWrapper">
                <span className="registerTitle">Register</span>
                <form action="" className="registerForm">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Enter your username' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' />
                    <label htmlFor="">Password</label>
                    <input type="Password" placeholder='Enter your password' />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton"><Link className='link' to='/login'>Login</Link></button>
            </div>
        </div>
    )
}
