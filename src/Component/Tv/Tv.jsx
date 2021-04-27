import axios from 'axios';
import React, { Component } from 'react'
import ReactPaginate from "react-paginate";
import SecureLs from "secure-ls";
import { Redirect } from "react-router-dom";
import "./tv.css";
let ls = new SecureLs({ encodingType: "aes" });

export default class Tv extends Component {
    state = {
        tv : [] , 
        totalPage : 1
    }
    componentDidMount() {
        this.getTv();
    }
    getTv = async () => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US&page=1`);
        this.setState({tv:data.results , totalPage : data.total_pages});
    }
    tvDetails = (id) => {
        this.props.history.push(`/tvdetail/${id}`)
    }
    handlePageClick = (e) => {
        let nextPage = e.selected + 1;
        this.props.history.push(`/tvpage/${nextPage}`);
    }
    render() {
       if (ls.get("token")) {
        return (
            <>
            <div className = "container py-5 my-5">
               <div className="row">
               {this.state.tv.length > 0 ? this.state.tv.map((tv)=>{
                    return(
                        <div className = "col-lg-4 my-3" key = {tv.id} onClick = {()=>this.tvDetails(tv.id)}>
                            <div className="tv">
                                <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} className = "w-100" alt={tv.title}/>
                                <h2 className = "text-white text-center">{tv.original_name}</h2>
                            </div>
                        </div>
                    );
                }) :<div className="hm-spinner"></div>}
               </div>
            
            </div>
            {this.state.tv.length > 0 ? (
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
                     />
                </div>
            ): null}
            </>
        )
       } else {
        return (
            <Redirect to = "/login"/>
        )
       }
    }
}
