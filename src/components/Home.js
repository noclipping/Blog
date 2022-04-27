import { getByLabelText } from '@testing-library/react'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Blog from './Blog.js'
import BlogCard from './BlogCard.js'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { domain } from '../constants'
export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`${domain}api/posts`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            })
    }, [])

    const cards = []
    for (const post of posts) {
        cards.push(
            <BlogCard
                key={post._id}
                number={post._id}
                title={post.title}
                content={post.content}
                date={post.date}
                imgURL={post.imgURL}
                description={post.description}
            />
        )
    }
    return <div className="Home">{cards}</div>
}
