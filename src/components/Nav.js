import { getSuggestedQuery } from '@testing-library/react'
import React from 'react'

export default function Nav() {
    const style = {
        display: 'grid',
        'grid-template-columns': '.5fr .5fr 1fr',
        'justify-items': 'left',
        'background-color': 'black',
        color: 'white',
    }

    return (
        <div style={style}>
            <div>Home</div>
            <div>About</div>
        </div>
    )
}
