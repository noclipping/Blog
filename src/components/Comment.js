import React from 'react'
import { decode } from 'html-entities'
export default function Comment(props) {
    return (
        <div className="comment">
            <h1>{props.author}</h1>
            <p>{decode(props.content)}</p>
            <div>{props.date}</div>
        </div>
    )
}
