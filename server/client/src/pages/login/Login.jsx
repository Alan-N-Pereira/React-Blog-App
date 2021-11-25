import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const [errorMsg, setErrormsg] = useState('');
    const { dispatch, isFetching, error} = useContext(Context)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        dispatch({type:'LOGIN_START'});
        try {
            const res = await axios.post('/auth/login',{
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:'LOGIN_SUCCESS',payload:res.data});
        } catch (err) {
            dispatch({type:'LOGIN_FAILURE'});
            setErrormsg(err.response.data)
        }
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <span className="loginTitle">Login</span>
                <form action="" className="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Enter your Username' ref={userRef} required={true}/>
                    <label htmlFor="">Password</label>
                    <input type="Password" placeholder='Enter your password' autoComplete='current-password' ref={passwordRef} required={true}/>
                    <button className="loginButton" type='submit'  disabled={isFetching}>Login</button>
                    {error && <span className='error'><i className="errorIcon fas fa-exclamation-triangle"></i> {errorMsg}</span>}
                </form>
                <button className="loginRegisterButton"><Link className='link' to='/register'>Register</Link></button>
            </div>
        </div>
    )
}
