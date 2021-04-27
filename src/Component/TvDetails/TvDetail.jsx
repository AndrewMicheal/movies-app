import React, { Component } from "react";
import SecureLs from "secure-ls";
import { Redirect } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./TvDetails.css";
import axios from "axios";

let ls = new SecureLs({ encodingType: "aes" });

export default class TvDetail extends Component {
  state = {
    tv: {},
    cast: [],
    officalTrailerKey: "",
  };
  componentDidMount() {
    if (ls.get("token")) {
      this.getTvDetail();
      this.getTvCast();
      this.getOfficalTrailerKey();
    }
  }
  getTvDetail = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`
    );
    this.setState({ tv: data });
  };
  getTvCast = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${this.props.match.params.id}/credits?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`
    );
    this.setState({ cast: data.cast.splice(0, 6) });
  };
  getOfficalTrailerKey = async () => {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${this.props.match.params.id}/videos?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US`
      );
      this.setState({ officalTrailerKey: data.results[0].key });
    } catch (error) {
      this.setState({ officalTrailerKey: "" });
    }
  };

  render() {
    if (ls.get("token")) {
      let image;
      if (this.state.tv) {
        image = `https://image.tmdb.org/t/p/w500/${this.state.tv.backdrop_path}`;
      } else {
        image = "";
      }

      return (
        <React.Fragment>
            <section className="section-content" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
              <div className="tv-detail-content p-5 mt-4">
                <div className="row">
                  <div className="col-lg-7 my-3">
                    <div className="tv-content">
                      <h2 className="tv-title">{this.state.tv.name}</h2>
                      <h3 className="tv-tagline my-3">{this.state.tv.tagline}</h3>
                      <p className="tv-desc">{this.state.tv.overview}</p>
                      <span className="number_of_episodes">number of episodes :{" "}
                        <span className="text-white">
                          {this.state.tv.number_of_episodes}
                        </span>{" "}
                      </span>
                      <span className="number_of_seasons">number of seasons :{" "}
                        <span className="text-white">
                          {this.state.tv.number_of_seasons}
                        </span>{" "}
                      </span>
                      <span className="vount-count">vote count :{" "}
                        <span className="text-white">
                          {this.state.tv.vote_count}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="image">
                      <img src={image} className="w-100" alt={this.state.tv.name}/>
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
                })) : null}
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
        </React.Fragment>
      );
    } else {
      ls.removeAll();
      return <Redirect to="/login" />;
    }
  }
}
