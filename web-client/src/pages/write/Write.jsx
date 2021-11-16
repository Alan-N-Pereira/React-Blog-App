import axios from 'axios';
import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {
    const [title,setTitle]= useState('');
    const [desc,setDesc]= useState('');
    const [file,setFile]= useState(null);
    const{user}=useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newPost ={
            username:user.username,
            title,
            desc,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now()+file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo=filename;
            try {
                await axios.post('/upload',data)
            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res = await axios.post('/posts', newPost)
            window.location.replace('/post/'+res.data._id)
        } catch (err) {
            
        }
    }
    return (
        <div className='write'>
            <div className="writeWrapper">
                {file && (<img src={URL.createObjectURL(file)} alt="" className="writeImg" />)}
                <form action="" className="writeForm" onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                        <div className="titleWrapper">
                            <label htmlFor="fileInput"><i className='writeIcon fas fa-plus'></i></label>
                            <input type="file" id='fileInput' style={{display:'none'}} onChange={(e)=> setFile(e.target.files[0])}/>
                            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <button className="writeSubmit" type='submit'>Publish</button>
                    </div>
                    <div className="writeFormGroup">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Tell Your Story...' type='text' className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
                    </div>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
