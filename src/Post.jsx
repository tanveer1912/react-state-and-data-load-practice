import './Post.css'

export default function Post ({post}){
    // console.log(post)
    const {userId, id, title,body} = post
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p><small>Id: {id}</small></p>
            <p><small>User Id: {userId}</small></p>
            <p>Body: {body}</p>
        </div>
    )
}