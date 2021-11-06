import './header.css';

export default function Header() {
	return (
		<div className="header">
			<div className="headerCircle"></div>
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
				<button className="headerBtn" onClick={() => {
                        const anchor = document.querySelector('#about')
                        anchor.scrollIntoView({ behavior: 'smooth' })
                        }} >POSTS</button>
			</div>
		</div>
	);
}
