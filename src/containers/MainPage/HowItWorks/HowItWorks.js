import React from 'react'

import StepByStep from './StepByStep/StepByStep'
import '../../../css/Container.css'
import './HowItWorks.css'

import findAPro from '../../../assets/images/find-a-pro.png'
import callThePro from '../../../assets/images/call-the-pro.png'
import serviceDone from '../../../assets/images/service-done.png'

let howitworks = (props) => {
    return (
        <div id='how-it-works'>
            <h1>Trust is created through relationships</h1>
            <div id='trust'>
                <span><i>You trust</i> your <em>family</em>, a <em>good friend</em>, your <em>colleague</em>.</span>
                <span><i>They trust</i> <em>Jeremy</em> for a safe and reliable service.</span>
                <span><i>You can trust</i> <em>Jeremy</em> as well.</span>
            </div>
            <h1>How Netwookie works</h1>
            <div id='step-by-step' className='container'>
                <StepByStep img={findAPro} title='Find a Pro' text='that friends & family already trust' />
                <StepByStep img={callThePro} title='Call the Pro' text='to arrange the service' />
                <StepByStep img={serviceDone} title='Get the service done' text='and pay directly' />
            </div>
        </div>
    )
}

export default howitworks