import React from 'react'

import './Toolbar.css'
import Link from './Link/Link'
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
                        <Link name="Become a Pro" />
                        <Link name="About" />
                        <Link name="Support" />
                        <Link name="News" />
                    </ul>
                    <GooglePlayLink />
                </div>
            </nav>
        )
    }
}

export default Toolbar