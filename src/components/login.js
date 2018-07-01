import React, { Component } from 'react';
import '../index.css';
import firebaseApp from '../firebase';
import reactlogo from './images/reactlogo.png';
import pandaclose from './images/pandaclose.png';
import pandaopen from './images/pandaopen.png';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.passwordfocus = this.passwordfocus.bind(this);
        this.loginfocus= this.loginfocus.bind(this);
        this.login = this.login.bind(this);
        this.loginblur = this.loginblur.bind(this);
        this.passwordblur = this.passwordblur.bind(this);
        this.state ={
            email:'',
            password:'',
            loginfocused:false,
            passwordfocused:false
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

   /* singIn() {
        console.log('this.state', this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }*/
    loginfocus(){
    this.setState({
        loginfocused:true,
        passwordfocused:false
    });
}
    passwordfocus(){
        this.setState({
            passwordfocused:true,
            loginfocused:false
        });
    }

    loginblur(){
        this.setState({
            loginfocused:false
        });
    }
    passwordblur(){
        this.setState({
            passwordfocused:false
        });
    }
    login(e) {
        e.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error.message);
        });
        e.preventDefault();
        e.stopPropagation();
    }
    render(){
        return(

            <div className="centerdiv form-inline">
<div className="text-center">
    <h1 className="whitetext indieflower">Welcome!</h1>
    <p className="whitetext">(A Google firebase login authentication it is.)</p>
</div>
<form>

<div className="form-group centerdivwithoutborder text-center">

    <table align="center">
        <tr>
            {!this.state.loginfocused && !this.state.passwordfocused ? <img src={reactlogo} alt="react js logo" className="img-circle img-responsive"/>: this.state.passwordfocused && !this.state.loginfocused? <img src={pandaclose} alt="panda eye close" className="img-circle img-responsive"/> : <img src={pandaopen} alt="panda eye open" className="img-circle img-responsive"/>}
        </tr>
        <tr>
            <input onChange={this.handleChange} onFocus={this.loginfocus} onBlur={this.loginblur} className="form-control inputbox"  name="email" type="text" placeholder="Username" />

        </tr>
        <tr>
            <input onChange={this.handleChange} onFocus={this.passwordfocus} onBlur={this.passwordblur} className="form-control inputbox" name="password" type="password" placeholder="Password" />

        </tr>
        <tr>
            <button className="btn btn-md btn-rounded btn-outline-info flright" onClick={this.login} type="submit" id="login-button">Login</button>

        </tr>
    </table>

</div>
</form>

            </div>

        );
    }
}

export default Login;