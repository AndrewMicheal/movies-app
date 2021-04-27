import axios from 'axios';
import React, { Component } from 'react'
import SecureLs from "secure-ls";
import { Redirect } from "react-router-dom";
import './MoviePage.css';
import ReactPaginate from "react-paginate";

let ls = new SecureLs({ encodingType: "aes" });

export default class MoviePage extends Component {
    state = {
        movies : [],
        page : this.props.match.params.id,
        totalPage : 0
    }
    componentDidMount() {
        if (ls.get("token")) {
            console.log("yes Data")
            this.getFormData(this.props.match.params.id);
        }
    }
    getFormData = async (id) => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=eda1636bfb0ecf2ce51b2d705926750e&page=${id}`);
        console.log(data);
        this.setState({movies:data.results , totalPage : data.total_pages});
    }
    handlePageClick = (e) => {
        let nextPage = e.selected + 1;
        this.props.history.push(`/page/${nextPage}`);
        this.getFormData(nextPage);
        this.setState({page:nextPage});
    }
    movieDetails = (id) => {
        this.props.history.push(`/movieDetail/${id}`)
    }
    render() {
      if (ls.get("token")) {
        let page = Number(this.state.page);
        return (
            <>
            <div className = "container py-5 my-5">
               <div className="row">
               {this.state.movies.length > 0 ? this.state.movies.map((movie)=>{
                   console.log("Movie Id : "+movie.id)
                    return(
                        <div className = "col-lg-4" key = {movie.id} onClick = {()=>this.movieDetails(movie.id)}>
                            <div className="movie">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className = "w-100" alt={movie.title}/>
                                <h2 className = "text-white text-center">{movie.title}</h2>
                            </div>
                        </div>
                    );
                }) :<div className="hm-spinner"></div>}
               </div>
            
            </div>
            {this.state.movies.length > 0 ? (
                <div className="pageination m-auto text-center p-4">
                <ReactPaginate
                     previousLabel={"prev"}
                     nextLabel={"next"}
                     breakLabel={"..."}
                     breakClassName={"break-me"}
                     pageCount={this.state.totalPage}
                     marginPagesDisplayed={2} // disply number of page Start Page (Page 1 + Page 2)
                     pageRangeDisplayed={4} // range displayed (10-15)
                     onPageChange={this.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"}
                     disabledClassName={"paginationDisabled"}
                     initialPage = {page - 1}
                     />
                </div>
            ): null}
            </>
        )
      } else {
          return (
              <Redirect to = "/login"/>
          );
      }
    }
}
