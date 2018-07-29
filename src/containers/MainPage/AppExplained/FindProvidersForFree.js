import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import PhoneScreen from '../../../components/PhoneScreen/PhoneScreen'
import '../../../css/Container.css'

import './AppExplained.css'

import phoneScreenImg from '../../../assets/images/phone-screen-driver.png'

let choose = (props) => {
    return (
        <Aux>
            <div className='container app-explained app-explained-center'>
                <h1>Find trusted service providers for free</h1>
                <div className='phone'>
                    <PhoneScreen img={phoneScreenImg} />
                </div>
            </div>
        </Aux>
    )
}

export default choose