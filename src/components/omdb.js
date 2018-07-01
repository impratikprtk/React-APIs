import React, {Component} from 'react';
import '../index.css';
import Request from 'superagent';
import _ from 'lodash';

class Omdb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:"",
            movies: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(){
        this.search(this.refs.query.value);
    }

    search(t){
        var  api = 'http://www.omdbapi.com/?i=tt3896198&apikey=d4c34077&r=json&plot=short&s=';
        var url = api+t;
        Request.get(url).then((response) => {
            console.log(response);
            this.setState({
                movies:response.body.Search
            });
        }).catch((error) => {
            console.log(error.message);

        });
    }
    render() {
        var movies = _.map(this.state.movies, (movie) => {
            return <li>{movie.Title}</li>;
        });
        return (
            <div>
                <form>
                <div>
                    <input type="text" className="from-control inputbox" ref="query" placeholder="Search your movie here" onChange={this.handleChange}/>
                    <p>{movies}</p>
                </div>
                </form>
            </div>
        );

    }

}
export default Omdb;