import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./TvPage.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import SecureLs from "secure-ls";

let ls = new SecureLs({ encodingType: "aes" });

export default class TvPage extends Component {
  state = {
    tv: [],
    page: this.props.match.params.id,
    totalPage: 0,
  };
  componentDidMount() {
    if (ls.get("token")) {
      this.getFormData(this.props.match.params.id);
    }
  }
  getFormData = async (id) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US&page=${id}`
    );
    console.log(data);
    this.setState({ tv: data.results, totalPage: data.total_pages });
  };
  handlePageClick = (e) => {
    let nextPage = e.selected + 1;
    this.props.history.push(`/tvpage/${nextPage}`);
    this.getFormData(nextPage);
    this.setState({ page: nextPage });
  };
  tvDetails = (id) => {
    this.props.history.push(`/tvdetail/${id}`);
  };
  render() {
    if (ls.get("token")) {
      let page = Number(this.state.page);
      return (
        <>
          <div className="container py-5 my-5">
            <div className="row">
              {this.state.tv.length > 0 ? (
                this.state.tv.map((tvItem) => {
                  return (
                    <div
                      className="col-lg-4"
                      key={tvItem.id}
                      onClick={() => this.tvDetails(tvItem.id)}
                    >
                      <div className="movie">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${tvItem.poster_path}`}
                          className="w-100"
                          alt={tvItem.name}
                        />
                        <h2 className="text-white text-center">
                          {tvItem.name}
                        </h2>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="hm-spinner"></div>
              )}
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
                     initialPage = {page - 1}
                     />
                </div>
            ): null}
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
