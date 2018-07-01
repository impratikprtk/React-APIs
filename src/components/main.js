import React, {Component} from 'react';
import '../index.css';
import firebaseApp from '../firebase';
import Request from 'superagent';
import Weather from './weather';
import Youtube from './youtube';
import Omdb from './omdb';

//api:"http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=52191bcdfb12b82cf257fb4bdd28a96f",

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        youtubeapi:false,
        omdbapi:false
        };
        this.logout = this.logout.bind(this);
        this.youtubeClick = this.youtubeClick.bind(this);
        this.omdbClick = this.omdbClick.bind(this);
    }


    logout() {
        firebaseApp.auth().signOut();
    }

  youtubeClick(){
  this.setState({
      youtubeapi:true,
      omdbapi:false
  });
  }

    omdbClick(){
        this.setState({
            youtubeapi:false,
            omdbapi:true
        });
    }

    render() {
        Request.get(this.state.api).then((response) => {
            console.log(response);
        });

        return (

            <div className="container-fluid">
<div className="row">
                <nav id="navbar">
                    <span className="navar-brand Sacramento"><b>Almost There</b></span>
                    <button onClick={this.logout} className="btn btn-md btn-rounded btn-outline-info flright" >Logout</button>
                </nav>
</div>
                <div className="row centerdivwithoutborder textalign">
                    <Weather/>
                </div>
    <div className="row">
        <div className="centerdivwithoutborder">
            <h1 className="whitetext textalign acme">Welcome to API Junction</h1>

            <div className="container-fluid">
                <div className="row">
            <div onClick={this.youtubeClick} className="col-lg-6 innnerbox">
<h1>YouTube API</h1>
                <p>(A youtube API to search youtube videos upto a limit of first 5 result.)</p>
            </div>
            <div onClick={this.omdbClick} className="col-lg-6 innnerbox2">
<h1>OMDb API</h1>
                <p>(A OMDb API to search movies name with keyword.)</p>
            </div>
                </div>
            </div>
        </div>


</div>

                <div className="row centerdivwithoutborder textalign">
                            {this.state.youtubeapi? <Youtube/>:null}
                    {this.state.omdbapi? <Omdb/>:null}
                </div>


</div>





        );

    }

}
export default Dashboard;