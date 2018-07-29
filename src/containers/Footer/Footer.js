import React from 'react'

import NavLink from '../../components/NavLink/NavLink'
import GooglePlayLink from '../../components/GooglePlayLink/GooglePlayLink'

import './Footer.css'
import '../../css/Container.css'
import logo from '../../assets/images/netwookie-logo.png'

let footer = (props) => {
    return (
        <footer>
            <div id='footer' className='container'>
                <div id='footer-left'>
                    <img id='footer-logo' src={logo} alt='netwookie' />
                    <div id='footer-social'>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                    </div>
                    <div id='ts-and-cs'>
                        <span><strong><a href='#'>Privacy policy</a> | <a href='#'>Terms of service</a></strong></span>
                        <span>(c) 2018 Netwookie</span>
                    </div>
                </div>
                <div id='sitemap'>
                    <div id='sitemap-content'>
                        <h2>Site map</h2>
                        <ul>
                            <NavLink name="Home" />
                            <NavLink name="Become a Pro" />
                            <NavLink name="About" />
                            <NavLink name="Support" />
                            <NavLink name="News" />
                        </ul>
                    </div>
                </div>
                <div id='footer-download-the-app'>
                    <div>
                        <h2>Download the app:</h2>
                        <div className='google-play-link'> <GooglePlayLink /></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer