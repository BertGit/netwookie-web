import React from 'react'

import './StepByStep.css'

let step = (props) => {
    return (
        <div className='single-step'>
            <img src={props.img} />
            <span><strong>{props.title}</strong></span>
            <span>{props.text}</span>
        </div>
    )
}

export default step