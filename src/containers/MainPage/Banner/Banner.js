import React from 'react'

import './Banner.css'

import jeremy from '../../../assets/images/jeremy.jpg'

let banner = (props) => {
    return (
        <div id='banner'>
            <div id='hero'>
                <h1>Find a Pro<br />you can trust</h1>
                <h2>with the Netwookie app</h2>
                <a href='#' class='btn btn-outline-light'>Download for Free</a>
            </div>
            <div id='driver-details'>
                <div id='arrow-left' />
                <div id='driver'>
                    <img src={jeremy} alt="bodaboda-driver" />
                    <span>Jeremy</span>
                </div>
                <span>Motorbike Driver</span>
                <span>3 SHARED CONTACTS</span>
                <span>Anna, Fred & Mum</span>
            </div>
        </div>
    )
}

export default banner;