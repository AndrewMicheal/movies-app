import axios from "axios";
import React, { Component } from "react";
import "./MovieDetails.css";
import SecureLs from "secure-ls";
import { Redirect } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

let ls = new SecureLs({ encodingType: "aes" });

export default class MovieDetail extends Component {
  state = {
    movie: {},
    cast: [],
    officalTrailerKey : ""
  };
  componentDidMount() {
   if (ls.get("token")) {
    this.getMovieDetail();
    this.getMovieCast();
    this.getOfficalTrailerKey();
   }
  }
  getMovieDetail = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`);
    this.setState({ movie: data });
  };
  getMovieCast = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`);
    this.setState({ cast: data.cast.splice(0, 6) });
  };
  getOfficalTrailerKey = async () => {
    try{
      let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`);
      this.setState({officalTrailerKey : data.results[0].key});
    } catch (error) {
      this.setState({officalTrailerKey : ""})
    }
  }
  render() {
    
    if (ls.get("token")) {
      let image;
    if (this.state.movie) {
      image = `https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`;
    } else {
      image = "";
    }
      return (
        <React.Fragment>
          {this.state.movie ? (
            <>
            <section className="section-content" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
              <div className="movie-detail-content p-5 mt-4">
                <div className="row">
                  <div className="col-lg-6 my-3">
                    <div className="movie-content">
                      <h2 className="movie-title">{this.state.movie.title}</h2>
                      <h3 className="movie-tagline my-3">{this.state.movie.tagline}</h3>
                      <p className="movie-desc">{this.state.movie.overview}</p>
                      <span className="realse-date">release date :{" "}
                        <span className="text-white">
                          {this.state.movie.release_date}
                        </span>{" "}
                      </span>
                      <span className="vount-count">vote count :{" "}
                        <span className="text-white">
                          {this.state.movie.vote_count}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img src={image} className="w-100" alt={this.state.movie.title}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className = "cast my-5 py-5">
            <div className = 'text-center'>
              <span className = "cast-star">*************************&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className = "cast-item">Cast</span>
              <span className = "cast-star">&nbsp;&nbsp;&nbsp;&nbsp;*************************</span>
            </div>
            <div className="container py-5 mt-5">
              <div className="row">
                {this.state.cast ?
                (this.state.cast.map((item , index)=> {
                  return (
                    <div className="col-lg-2 my-3" key = {index}>
                      <div className="cast">
                        <div className="cast-image">
                          <img src = {`https://image.tmdb.org/t/p/w500/${item.profile_path}`} className = "w-100" alt={item.name}/>
                        </div>
                        <h4 className = "text-white text-center mt-2">{item.name}</h4>
                      </div>
                    </div>
                  );
                })) : <div className="hm-spinner"></div>}
              </div>
            </div>
          </section>
          <section className = "my-5 py-5">
            <div className = 'text-center'>
                <span className = "official-star">*************************&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className = "official-trailer">Official Trailer</span>
                <span className = "official-star">&nbsp;&nbsp;&nbsp;&nbsp;*************************</span>
            </div>
            <div className="container my-5 py-4">
              {this.state.officalTrailerKey !== "" ? 
                <iframe className = "trailer" src={`https://www.youtube.com/embed/${this.state.officalTrailerKey}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              : <NotFound/>}
            </div>
          </section>
            </>
          ) :null}
        </React.Fragment>
      );
    } else {
      ls.removeAll();
      return <Redirect to="/login" />;
    }
  }
}
