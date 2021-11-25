import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './sidebar.css'
export default function Sidebar() {
    const [cats,setCat]=useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get('/categories')
            setCat(res.data)
        }
        getCats();
    },[])
    return (
        <div className='sidebar' id='about'>
            <div className="sidebarItem">
                <span className="sidebarTitle" >ABOUT US</span>
                <img className='sidebarImg' src="/images/about-me.jpg" alt="" srcset="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aperiam possimus voluptatum velit voluptatibus perspiciatis obcaecati adipisci cupiditate!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((cat)=>{
                        return <Link className='link' to={`/?cat=${cat.name}`}>
                                <li className="sidebarListItem">{cat.name}</li>
                            </Link> 
                    })}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}
