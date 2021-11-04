import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img src="/images/post-img.jpg" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className='writeIcon fas fa-plus'></i></label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Tell Your Story...' type='text' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
