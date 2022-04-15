import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import React, { useState } from 'react'
import Comment from './Comment'
import { domain } from '../constants'
export default function Post(props) {
    let params = useParams()
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState('')
    useEffect(() => {
        fetch(`${domain}api/post/${params.id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data)
                console.log(data)
                console.log(post, 'post')
                return data
            })
            .then((data) => {
                if (data[0].comments[0]) {
                    Promise.all(
                        data[0].comments.map((u) =>
                            fetch(`${domain}api/comment/${u}`)
                        )
                    )
                        .then((response) => response.map((e) => e.json()))
                        .then((e) =>
                            Promise.all(e).then((r) => {
                                r.forEach((cmnt) => {
                                    if (cmnt.length > 0) {
                                        setComments((oldComments) => [
                                            ...oldComments,
                                            cmnt[0],
                                        ])
                                    }
                                })
                            })
                        )
                }
            })
    }, [])
    const handleSubmit = function (e) {
        if (content.length > 100) {
            setError('Comment longer than 4 characters.')
        } else {
            setError('')
        }
        fetch(`${domain}api/comment/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                author: name,
                content,
                post: params.id,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })

        e.preventDefault()
    }
    return (
        <div>
            <header>{post ? post[0].title : ''}</header>

            <p style={{ marginBottom: '300px' }}>
                {post ? post[0].content : ''}
            </p>
            <form className="commentForm" onSubmit={handleSubmit}>
                <label
                    style={{
                        borderBottom: 'solid 1px white',
                        paddingBottom: '20px',
                    }}
                >
                    Comment
                </label>
                <label>name</label>
                <br />
                <input onChange={(e) => setName(e.target.value)} />
                <br />
                <label>content</label>
                <br />
                <textarea onChange={(e) => setContent(e.target.value)} />
                <br />
                {error ? (
                    <p style={{ color: 'red', fontSize: '20px' }}>{error}</p>
                ) : (
                    ''
                )}
                <button>Submit</button>
            </form>

            {comments.length > 0
                ? comments.map((e) => (
                      <Comment
                          author={e.author}
                          content={e.content}
                          date={e.date}
                          id={e._id}
                          key={Math.random(9999999)}
                      />
                  ))
                : ''}
        </div>
    )
}
