import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function BlogCard(props) {
    return (
        <Link to={`/Blog/post/${props.number}`}>
            <div className="BlogCard">
                <h2>{props.title}</h2>
                <img className="card-image" />
                <p className="description">{props.content}</p>
            </div>
        </Link>
    )
}
