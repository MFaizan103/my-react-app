import React, {Component} from 'react';
import './Hello.css';
class Hello extends Component {
    render(){
        return( 
        <div className="f5 tc white grow courier bg-dark-pink">
            <h1>Hello World!</h1>
        <p>{this.props.greet}</p>
        </div>
        )
    }
}

export default Hello;   