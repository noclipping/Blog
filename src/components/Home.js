import { getByLabelText } from '@testing-library/react'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Blog from './Blog.js'
import BlogCard from './BlogCard.js'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/posts')
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
            />
        )
    }
    return <div className="Home">{cards}</div>
}
