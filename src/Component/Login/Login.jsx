import React, { Component } from 'react'
import axios from 'axios';
import Joi from 'joi';
import "./LoginCss.css";
import SecureLs from "secure-ls";

let ls = new SecureLs({encodingType:'aes'});

export default class Login extends Component {
    state =  {
        flag : false,
        emailMsg : "",
        passwordMsg : "",
        errorMsg : ""
    }
    user = {
        email : "",
        password: ""
    }
    schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).messages({"string.email": "email  must be a valid email","string.empty": "email is not allowed to be empty",}),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,}$")).required().messages({"string.pattern.base" : "Enter password at least 3", "string.empty":"password required"}),
    })
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value;
        this.validationData(e);
    }
    validationData = (e) => {
        let results = this.schema.validate(this.user, { abortEarly: false });
        if (results.error) {
            if (e.target.name === "email") {
                if (results.error.details.find((error)=>error.path[0]==="email")) {
                    this.setState({emailMsg:results.error.details.find((error)=>error.path[0]==="email").message});
                } else {
                    this.setState({emailMsg:""});
                }
            } else if (e.target.name === "password") {
                if (results.error.details.find((error)=>error.path[0]==="password")) {
                    this.setState({passwordMsg:results.error.details.find((error)=>error.path[0]==="password").message});
                } else {
                    this.setState({passwordMsg:""})
                }
            }
            this.setState({flag:false});
        } else {
            this.setState({emailMsg:"",passwordMsg:"",flag:true});
        }
    }
    sendData = async () => {
       let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signin`,this.user);
       if (data.message ==="success") {
           ls.set("token",data.token)
           this.props.isAuth(true);
           console.log(data.token)
           this.props.history.push("/home");
       } else {
           this.setState({errorMsg:data.message})
       }
    }

    render() {
       return (
            <div className = "container my-5 py-5">
                <div className="login-container m-auto">
                    <div className="form-group">
                        <label className = "text-white">Email</label>
                        <input name = "email" onInput = {this.getFormData} type="email" className = "form-control"/>
                        {this.state.emailMsg !== "" ? <div className="alert alert-danger text-center mt-1">{this.state.emailMsg}</div>:null}
                    </div>
                    <div className="form-group my-5">
                        <label className = "text-white">Password</label>
                        <input name = "password" onInput = {this.getFormData} type="password" className = "form-control"/>
                        {this.state.passwordMsg !== "" ? <div className="alert alert-danger text-center mt-1">{this.state.passwordMsg}</div>:null}
                    </div>
                    <button onClick = {this.state.flag ? this.sendData : null} className = {`btn btn-primary text-white ${!this.state.flag ? `disabled myButton` : ``}`}>Login</button>
                    {this.state.errorMsg !== "" ? <div className="alert alert-danger text-center mt-2">{this.state.errorMsg}</div>:null}
                </div>
            </div>
        )
    }
}
