import React from 'react'

import './Gradient.css'

let gradient = (props) => {
    const grad = [props.start, props.end].join(',')
    return (
        <div className='gradient' style={{ backgroundImage: `linear-gradient(180deg, ${grad})` }}>
            {props.children}
        </div>
    )
}

export default gradient