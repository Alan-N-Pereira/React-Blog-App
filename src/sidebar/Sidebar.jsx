import './sidebar.css'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="" alt="" srcset="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aperiam possimus voluptatum velit voluptatibus perspiciatis obcaecati adipisci cupiditate! Expedita dolor a consectetur autem quo molestiae tempore dolorum beatae, animi quidem!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>

            </div>
        </div>
    )
}
