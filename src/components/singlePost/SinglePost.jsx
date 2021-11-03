import './singlePost.css';

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="/images/post-img.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className='singlePostIcon far fa-edit'></i>
                        <i className='singlePostIcon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>John</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet cum obcaecati, eveniet fugit eaque rerum voluptatibus maxime ducimus neque consequatur provident facilis molestiae minima error labore magni nemo optio quod.</p>
            </div>
        </div>
    )
}
