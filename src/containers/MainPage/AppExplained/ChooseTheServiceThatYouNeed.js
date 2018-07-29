import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import PhoneScreen from '../../../components/PhoneScreen/PhoneScreen'

import './AppExplained.css'

import phoneScreenImg from '../../../assets/images/phone-screen-service.png'

let choose = (props) => {
    return (
        <Aux>
            <div className='container app-explained'>
                <div className='hero hero-left'>
                    <h1>Choose the service that you need</h1>
                    <span>Looking for a safe and reliable boda boda driver?</span>
                    <span>Need a last minute tailor?</span>
                    <span>Want to hire a chef for a big family dinner a month in advance?</span>
                </div>
                <div className='phone'>
                    <PhoneScreen img={phoneScreenImg} />
                </div>
            </div>
        </Aux>
    )
}

export default choose