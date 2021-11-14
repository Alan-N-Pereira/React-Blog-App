import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrormsg] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post('/auth/register', {
                username,
                email,
                password
            })
            res.data && window.location.replace('/login')
        }catch(err){
            setError(true);
            setErrormsg(err.response.data)
        }
    }
    return (
        <div className='register'>
            <div className="registerWrapper">
                <span className="registerTitle">Register</span>
                <form action="" className="registerForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Enter your username' onChange={e=>setUsername(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="Password" placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton" type='submit'><Link className='link' to='/login'>Login</Link></button>
                {error && <span className='error'><i className="errorIcon fas fa-exclamation-triangle"></i> {errorMsg}</span>}
            </div>
        </div>
    )
}
