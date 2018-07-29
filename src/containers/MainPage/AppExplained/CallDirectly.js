import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import PhoneScreen from '../../../components/PhoneScreen/PhoneScreen'
import '../../../css/Container.css'

import './AppExplained.css'

import phoneScreenImg from '../../../assets/images/phone-screen-call.png'

let choose = (props) => {
    return (
        <Aux>
            <div className='container app-explained'>
                <div className='phone'>
                    <PhoneScreen img={phoneScreenImg} />
                </div>
                <div className='hero'>
                    <h1>Call directly to arrange a job</h1>
                    <span>Call a Pro and arrange terms of the service.</span>
                    <span>What fair pricing?</span>
                    <span>A service for now or later?</span>
                </div>
            </div>
        </Aux>
    )
}

export default choose