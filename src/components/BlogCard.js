import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function BlogCard(props) {
    return (
        <Link to={`/post/${props.number}`}>
            <div className="BlogCard">
                <h2>{props.number}</h2>
                <img className="card-image" />
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Link>
    )
}
