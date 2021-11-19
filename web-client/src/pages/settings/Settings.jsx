import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios';

export default function Settings() {
    const [username,setUsername]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [file,setFile]= useState(null);
    const [success,setSuccess]= useState(false);
    
    const {user} = useContext(Context);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const updatedUser ={
            userId: user._id,
            username,
            email,
            password
        }
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name",filename)
            data.append("file",file)
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload',data)
            } catch (err) {
                console.log(err);
            }
        }
        try {
            await axios.put('/users/'+user._id, updatedUser);
            setSuccess(true);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className='settingsForm' onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img className='settingsPPImg' src={user.profilePic} alt="" />
                        <label htmlFor="fileInput"><i className='settingsPPIcon far fa-user-circle'></i></label>
                        <input type="file" id='fileInput'style={{display:'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder={user.username} onChange={(e)=> setUsername(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder={user.email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                    <button className="settingsSubmit" type='submit' >Update</button>
                    {success && <span className='success'><i className="successIcon fas fa-check-circle"></i> Profile has been updated</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
