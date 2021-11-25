import React from 'react'
import { Link } from 'react-router-dom'
import './pageNotFound.css'

export default function PageNotFound() {
    return (
        <div className='pageNotFound'>
            <span className='number'>404</span>
            <span className='msg'>Page Not Found</span>
            <button className='return'><Link className='link' to='/'>Return to home</Link></button>
        </div>
    )
}
