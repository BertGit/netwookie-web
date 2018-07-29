import React from 'react'

import './PhoneScreen.css'

let phoneScreen = (props) => {
    return (
        <div className='phone-screen'>
            <div className='speaker' />
            <img src={props.img} />
        </div>
    )
}

export default phoneScreen