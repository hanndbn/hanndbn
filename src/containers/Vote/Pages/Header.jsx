import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <ul className="nav nav-pills" style={{marginBottom: '20px'}}>
                <li role="presentation" className="active"><Link title="Home" to="/" style={{color: 'white'}}><span
                    className="fa fa-home"></span>&nbsp;&nbsp;Polls Home</Link>
                </li>
            </ul>
        )
    }
}

export default Header;