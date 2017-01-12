import React, {Component} from 'react';
import Nav from './Nav';
class Main extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
}
export default Main;