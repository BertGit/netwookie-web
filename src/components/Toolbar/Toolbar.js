import React from 'react'

import './Toolbar.css'
import NavLink from '../NavLink/NavLink'
import GooglePlayLink from '../GooglePlayLink/GooglePlayLink'
import logo from '../../assets/images/netwookie-logo.png'

class Toolbar extends React.PureComponent {

    toolbarRef = React.createRef();

    componentDidMount = () => {
        this.props.toolbarRendered(this.toolbarRef.current.clientHeight)
    }

    render() {
        return (
            <nav ref={this.toolbarRef} id='toolbar' >
                <img src={logo} className='logo' alt='Netwookie' />
                <div id='navbar'>
                    <ul>
                        <NavLink name="Become a Pro" />
                        <NavLink name="About" />
                        <NavLink name="Support" />
                        <NavLink name="News" />
                    </ul>
                    <div className='google-play-link'> <GooglePlayLink /></div>
                </div>
            </nav>
        )
    }
}

export default Toolbar