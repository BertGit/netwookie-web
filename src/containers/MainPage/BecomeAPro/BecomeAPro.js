import React from 'react'

import GooglePlayLink from '../../../components/GooglePlayLink/GooglePlayLink'

import './BecomeAPro.css'
import '../../../css/Buttons.css'
import '../../../css/Container.css'

let becomeAPro = (props) => {
    return (
        <div id='become-a-pro' className='container'>
            <h1>Become a Pro</h1>
            <span>Your business. Your Organisation. Your revenue.</span>
            <a href='#' class='btn btn-orange'>Learn more</a>
            <span>Download the app today for free:</span>
            <div className='google-play-link'> <GooglePlayLink /></div>
        </div>
    )
}

export default becomeAPro