import React from 'react'

import Aux from './../../hoc/Aux/Aux'
import Banner from './Banner/Banner'
import HowItWorks from './HowItWorks/HowItWorks'
import Gradient from '../../components/Gradient/Gradient'
import ChooseTheServiceThatYouNeed from './AppExplained/ChooseTheServiceThatYouNeed'
import FindProvidersForFree from './AppExplained/FindProvidersForFree'
import CallDirectly from './AppExplained/CallDirectly'
import BecomeAPro from './BecomeAPro/BecomeAPro'
import Statements from './Statements/Statements'

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
                <Gradient start='rgb(245,196,89)' end='rgb(245,185,66)'>
                    <FindProvidersForFree />
                </Gradient>
                <Gradient start='rgb(123,213,233)' end='rgb(103,199,220)'>
                    <CallDirectly />
                </Gradient>
                <BecomeAPro />
                <Gradient start='rgb(246,197,88)' end='rgb(246,197,88)'>
                    <Statements />
                </Gradient>
            </Aux >
        )
    }
}

export default MainPage