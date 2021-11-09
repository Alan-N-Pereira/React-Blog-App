import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className='settingsForm'>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img className='settingsPPImg' src="/images/profile-picture1.jpg" alt="" />
                        <label htmlFor="fileInput"><i className='settingsPPIcon far fa-user-circle'></i></label>
                        <input type="file" id='fileInput'style={{display:'none'}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Name' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
