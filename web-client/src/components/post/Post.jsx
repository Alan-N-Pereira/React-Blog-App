import './post.css'
import {Link} from "react-router-dom"

export default function Post({post}) {
    const PF = 'http://localhost:8000/images/'
    return (
        
        <div className="post">
            <Link className='link' to={`/post/${post._id}`}>
                {post.photo && (<img className="postImg" src={PF + post.photo} alt="" />)}
                <div className="postInfo">
                    <div className="postCategories">
                        {post.categories.map((c)=>{
                            return <span className="postCategory">{c.name}</span>
                        })}
                    </div>
                    <span className="postTitle">{post.title}</span>
                    <hr />
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='postDescript'>{post.desc}</p>
            </Link>
        </div>
    )
}
