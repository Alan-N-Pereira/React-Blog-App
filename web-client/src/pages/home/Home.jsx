import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.css';

export default function Home() {
	const [posts,setPosts]=useState([]);

	useEffect(() => {
		const fetchPosts = async ()=>{
			const res = await axios.get('/posts')
			setPosts(res.data)
		}
		fetchPosts()
	}, [])
	return (
		<div>
			<Header />
			<div className="home" id='about'>
				<Posts posts={posts}/>
				<Sidebar/>
			</div>
		</div>
	);
}
