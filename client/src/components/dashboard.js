import React, {Component} from 'react';
import 'whatwg-fetch';
//import axios from 'axios';
import './signInForm.css';

class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }

    render(){
        return(
            <div>
                Welcome To The DashBoard......
            </div>
        )
    }

}


export default DashBoard;