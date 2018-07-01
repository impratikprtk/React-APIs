import React from 'react';
import { Component } from 'react';
import Navbar from './components/navbar.js';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/main';
import firebaseApp from './firebase';
import './index.css';
/*done importing*/
/*App class starting*/
class App extends Component{


    constructor() {
        super();
        this.authListener = this.authListener.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.signupClick = this.signupClick.bind(this);
        this.state = ({
            user:null,
            loginbtn: false,
            signupbtn: false
        });

    }

    loginClick(){
        this.setState({loginbtn: true, signupbtn:false});
        console.log("login");
    }
    signupClick(){
        this.setState({signupbtn:true, loginbtn:false});
        console.log("signup");
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                //localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                //localStorage.removeItem('user');
            }
        });
    }


    render(){
        return(
            <div className="container-fluid">

                <div className="row">
                    {this.state.user ? null : <Navbar loginClick = {this.loginClick} signupClick = {this.signupClick}/>}
                </div>
                <div className="row">
                    {this.state.user ? <Dashboard/> :null}
                </div>

                <div>
                    {this.state.signupbtn===false && this.state.loginbtn===false && !this.state.user ? <div className="centerdivwithoutborder text-center"><h1 className="galada">Welcome to React JS API website. </h1><p>(Login or signup for dashboard)</p></div>:null}
                    {this.state.signupbtn===true? <Signup /> : null}
                    {this.state.loginbtn===true && !this.state.user ? <Login/> : null}
                </div>


            </div>
        );
    }
}
export default App;
