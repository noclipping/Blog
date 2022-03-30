import React from 'react'

export default function Comment(props) {
    return (
        <div className="comment">
            <h1>{props.author}</h1>
            <p>{props.content}</p>
            <div>{props.date}</div>
        </div>
    )
}
