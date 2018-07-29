import React from 'react'

import './Statement.css'

let statement = (props) => {
    return (
        <div className='statement'>
            <div className='content'>
                <p>"{props.text}"</p>
                <div className='triangle' />
            </div>
            <div className='statement-author'>
                <span><strong>{props.author}</strong></span>
                <span>{props.origin}</span>
            </div>
        </div>
    )
}

export default statement