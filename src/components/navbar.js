import React, {Component} from 'react';
import '../index.css';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }




    render() {
        return (
<div >

    <nav id="navbar">
        <span className="navar-brand Sacramento"><b>Almost There</b></span>
        <button id="signupbtn" onClick={this.props.signupClick} className="btn btn-md btn-rounded btn-outline-info flright" href="#home">SignUp</button>

        <button id="loginbtn" onClick={this.props.loginClick} className="btn btn-md btn-rounded btn-outline-success flright" href="#news">Login</button>
    </nav>


</div>


        );
    }
}

export default Navbar;