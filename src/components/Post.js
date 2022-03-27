import React from 'react'
import { useParams } from 'react-router-dom'
export default function Post(props) {
    let params = useParams()
    return (
        <div>
            <header>Waddup!</header>
        </div>
    )
}
