import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import SecureLs from "secure-ls";

let ls = new SecureLs({encodingType:'aes'});

export default class ProtectedRoute extends Component {
    render() {
        let token;
        try {
            let encodeToken = ls.get('token');
            token = encodeToken;
        } catch (error) {
            localStorage.clear();
            return <Redirect to = "/login"/>
        }
        if (this.props.isAuth || token) { // || bec. isAuth is false when you render App.js
            return (
                <Route {...this.props}/>
            )
        } else {
            return (
                <Redirect to = "/login"/>
            );
        }
    }
}
