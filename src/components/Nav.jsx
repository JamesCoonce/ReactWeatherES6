import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
}

export default Nav;