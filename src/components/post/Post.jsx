import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="/images/post-img.jpg" alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Music</span>
                    <span className="postCategory">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDescript'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus quidem voluptatem magni hic a. Similique, officia. Inventore, beatae unde magni, ullam, vel explicabo sequi facilis accusamus aliquam libero voluptate?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus quidem voluptatem magni hic a. Similique, officia. Inventore, beatae unde magni, ullam, vel explicabo sequi facilis accusamus aliquam libero voluptate?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus quidem voluptatem magni hic a. Similique, officia. Inventore, beatae unde magni, ullam, vel explicabo sequi facilis accusamus aliquam libero voluptate?</p>
        </div>
    )
}
