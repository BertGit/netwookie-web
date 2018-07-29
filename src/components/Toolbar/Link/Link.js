import React from 'react'

import './Link.css'

let link = (props) => {
    return (
        <li className='nav-link'>{props.name}</li>
    )
}

export default link