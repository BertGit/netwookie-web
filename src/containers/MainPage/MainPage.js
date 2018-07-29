import React from 'react'

import Aux from './../../hoc/Aux/Aux'
import Banner from './Banner/Banner'
import HowItWorks from './HowItWorks/HowItWorks'
import Gradient from '../../components/Gradient/Gradient'
import ChooseTheServiceThatYouNeed from './AppExplained/ChooseTheServiceThatYouNeed'

import './MainPage.css'
import '../../css/Buttons.css'

class MainPage extends React.Component {
    render() {
        return (
            < Aux >
                <Banner />
                <HowItWorks />
                <Gradient start='rgb(241,159, 80)' end='rgb(235,135,53)'>
                    <ChooseTheServiceThatYouNeed />
                </Gradient>
            </Aux >
        )
    }
}

export default MainPage