import React from 'react'

import './NavLink.css'

let link = (props) => {
    return (
        <li className='nav-link'>{props.name}</li>
    )
}

export default link