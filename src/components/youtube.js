import React, {Component} from 'react';
import '../index.css';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=${result}&q=`;

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultyt: [],
            query:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.clicked = this.clicked.bind(this);
    }


    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    clicked(){
        fetch(finalURL + this.state.query)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({resultyt});
            });
    }


    render() {

        return (
            <div>
                <div>

                    <div className="form-group">
                        <input type="text" name="query" onChange={this.handleChange} className="form-control wid300" placeholder="search on youtube"/>
                        <button className="btn btn-md btn-rounded btn-outline-info" onClick={this.clicked}>Get youtube videos</button>
                    </div>
                    {
                        this.state.resultyt.map((link, i) => {
                            console.log(link);
                            var frame = <div key={i} className="youtube"><iframe title="kuchbhi" width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                            return frame;
                        })
                    }
                    {this.frame}


                </div>
            </div>
        );

    }

}
export default Youtube;