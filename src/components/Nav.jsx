import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <Link className="navbar-brand react-brand">Bootstrap Weather App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <IndexLink className="nav-link" to="/">Get Weather</IndexLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/examples" className="nav-link">Examples</Link>
                        </li>

                    </ul>
                </div>

            </nav>
        );
    }
}

export default Nav;