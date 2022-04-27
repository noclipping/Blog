import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function BlogCard(props) {
    return (
        <Link to={`/post/${props.number}`}>
            <div className="BlogCard">
                <h2>{props.title}</h2>
                <img
                    className="card-image"
                    src={props.imgURL.length > 4 ? props.imgURL : ''}
                />
                <p className="description">{props.description}</p>
            </div>
        </Link>
    )
}
