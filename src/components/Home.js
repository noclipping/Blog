import { getByLabelText } from '@testing-library/react'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Blog from './Blog.js'
import BlogCard from './BlogCard.js'
import { Link } from 'react-router-dom'

export default function Home() {
    const cards = []
    for (let i = 0; i < 20; i++) {
        cards.push(
            <BlogCard key={Math.random(99999)} number={Math.random(9999)} />
        )
    }
    return <div className="Home">{cards}</div>
}
