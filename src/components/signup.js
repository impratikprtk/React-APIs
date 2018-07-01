import  React, { Component } from 'react';
import '../index.css';
import firebaseApp from '../firebase';
class Signup extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state ={
            email: '',
            password: '',
            error:{
                message:''
            }
        }
    };

 /*   signUp(){
        console.log('this.state', this.state);
        const {email,password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
               this.setState({error})
            })
    }*/

    signUp(e){
        e.preventDefault();
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((error) => {
                alert(error);
            })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render(){
        return(
            <div className="centerdiv form-inline">
                <div className="container">
                    <h1 className="indieflower">Welcome!</h1>
                    <p>(Signup and you will be automatically redirected to the dashboard)</p>
<div className="form-group">
                    <input onChange={this.handleChange} name="email" className="form-control inputbox" type="email" placeholder="e-mail" />
                    <input onChange={this.handleChange} name="password" className="form-control inputbox" type="password" placeholder="Password" />
                    <button onClick={this.signUp} className="btn btn-md btn-rounded btn-outline-info flright" type="submit" id="signup-button">Signup</button>
</div>
                    <div><h3>{this.state.error.message}</h3></div>
                </div>
            </div>
        );
    }
}

export default Signup;