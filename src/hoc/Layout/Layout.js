import React from 'react'
import { configureAnchors } from 'react-scrollable-anchor'

import Aux from '../Aux/Aux'
import Toolbar from '../../components/Toolbar/Toolbar'
import MainPage from '../../containers/MainPage/MainPage'
import { Route, Switch } from 'react-router-dom'

class Layout extends React.Component {
    state = {
        toolbarHeight: 0
    }

    toolbarSizeChange = (newHeight) => {
        configureAnchors({ offset: -newHeight, scrollDuration: 1000 })
        this.setState({ toolbarHeight: newHeight })
    }

    render() {
        return (
            <Aux>
                <Toolbar toolbarRendered={this.toolbarSizeChange} />
                <div style={{ height: 10 }} />
                <main>
                    <Switch>
                        <Route path='/' render={() =>
                            <MainPage toolbarHeight={this.state.toolbarHeight} />
                        } />
                    </Switch>
                </main>
            </Aux>
        )
    }
}

export default Layout