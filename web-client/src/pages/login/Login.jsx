import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <span className="loginTitle">Login</span>
                <form action="" className="loginForm">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' />
                    <label htmlFor="">Password</label>
                    <input type="Password" placeholder='Enter your password' autoComplete='current-password'/>
                    <button className="loginButton">Login</button>
                </form>
                <button className="loginRegisterButton"><Link className='link' to='/register'>Register</Link></button>
            </div>
        </div>
    )
}
