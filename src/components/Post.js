import React from 'react'
const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export { Post }
