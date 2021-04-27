import React, { Component } from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import NavbarHome from './Component/NavbarHome/NavbarHome';
import ProtectedRoute from './Component/Protected Route/ProtectedRoute';
import Register from './Component/Register/Register';
import SecureLs from "secure-ls";
import Tv from './Component/Tv/Tv';
import "./App.css";
import MovieDetail from './Component/MoviesDetail/MovieDetail';
import MoviePage from './Component/MoviePage/MoviePage';
import NotFound from './Component/NotFound/NotFound';
import TvDetail from './Component/TvDetails/TvDetail';
import TvPage from './Component/TvPage/TvPage';
import ParticleContainer from './Component/ParticlesContainer/ParticleContainer';

let ls = new SecureLs({encodingType:'aes'});

class App extends Component {
  state = {
    isLoggedIn : false
  }
  isAuth = (isLogged) => {
    this.setState({isLoggedIn:isLogged})
  }
  render() {
    let token;
    try {
      token = ls.get("token");
    } catch (error) {
      localStorage.clear();
    }
    return (
      <>
        <ParticleContainer className="particles"/>
        <div className = "content">
          <div className = "center">
          {this.state.isLoggedIn || token ? <NavbarHome isAuth = {this.isAuth}/> : <Navbar/>}
        <Switch>
          <Route path="/tv" component={Tv} />
          <Route path="/login" render = {(props)=><Login {...props} isAuth = {this.isAuth}/>}/>
          <Route path="/register" component={Register} />
          <ProtectedRoute isAuth={this.state.isLoggedIn} path="/home" component={Home} />
          <Route path = "/movieDetail/:id" component = {MovieDetail}/>
          <Route path = "/page/:id" component = {MoviePage}/>
          <Route path = "/notfound" component = {NotFound} />
          <Route path = "/tvdetail/:id" component = {TvDetail} />
          <Route path = "/tvpage/:id" component = {TvPage} />
          <Route path = "/" exact component = {this.state.isLoggedIn || ls.get("token") ? Home : Register} />
          <Redirect to = "/notfound"/>
        </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;