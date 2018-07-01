import React, {Component} from 'react';
import '../index.css';
import Request from 'superagent';

class Weather extends Component{
constructor(props){
    super(props);
    this.state = {
      city:'CityName',
      country:'Country',
        temp:'',
        wind:'',
        humidity:'',
        desc:'',
        err:''

    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.weatherreport=this.weatherreport.bind(this);
}

  handleChange(e){
    this.setState({
        city:e.target.value.toUpperCase()
    });
}

    handleSubmit(){
        this.weatherreport(this.state.city);
    }

weatherreport(city1){
    var api='http://api.openweathermap.org/data/2.5/weather?APPID=52191bcdfb12b82cf257fb4bdd28a96f&units=metric&q=';
    var url=api + city1;
    Request.get(url).then((response) => {
        console.log(response);
        this.setState({
            country:response.body.sys.country,
            temp:response.body.main.temp,
            desc:response.body.weather[0].description,
            humidity:response.body.main.humidity,
            wind: response.body.wind.speed
        });

    }).catch((error) => {
        console.log(error.message);
        alert("Enter a valid city name or " + this.state.city+ " " + error.message);

    });
}

    render(){
        return(

            <div className="Weather">
            <div className="container">
<div className="col-md-6 push-md-3 col-xl-4 push-xl-4 card-block centerdivwithoutborder">
<div className="d-flex justify-content-between">
    <div className="d-inline-block">
<h3>{this.state.city}, {this.state.country}</h3>
        <p>Temperature:{this.state.temp}&deg;C</p>
        <p>{this.state.desc}</p>
    </div>



        <div className="col-4 col-md-5">
<div className="small-font">
<p>Humidity:{this.state.humidity}%</p>
    <p>Wind:{this.state.wind}km/h</p>

</div>
        </div>
    </div>

</div>

</div>

                <input type="text" className="inputbox" required ref="query" placeholder="City" onChange={this.handleChange}/>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary"><h3 className="indieflower">Current Weather</h3></button>

            </div>


        );
    }

}
export default Weather;