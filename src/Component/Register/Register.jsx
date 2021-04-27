import React, { Component } from 'react'
import axios from "axios";
import Joi from "joi";
import registerCss from "./Register.module.css";

export default class Register extends Component {
    user = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
      };
      
    
      state = {
        error : "",
        firstNameMsg : "",
        lastNameMsg : "",
        emailMsg: "",
        passwordMsg : "",
        ageMsg : "",
        flag : false
      };
      
    
      schema = Joi.object({
        first_name: Joi.string().pattern(new RegExp("^([a-zA-Z]+\\s*[A-Z]*)+$")).required().messages({"string.pattern.base": "Characters Only", "string.empty": "First Name is not allowed to be empty"}),
        last_name: Joi.string().pattern(new RegExp("^([a-zA-Z]+\\s*[A-Z]*)+$")).required().messages({"string.pattern.base": "Characters Only","string.empty": "Last Name is not allowed to be empty",}),
        email: Joi.string().email({ tlds: { allow: ["com", "net"] } }).messages({"string.email": "email  must be a valid email","string.empty": "email is not allowed to be empty",}),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,}$")).required().messages({"string.pattern.base" : "Enter password at least 3", "string.empty":"password required"}),
        age: Joi.number().integer().min(10).max(80).required().messages({"string.pattern.base" : "Enter age between 10 and 80", "string.empty":"age required"}),
      });
    
      getFormData = (e) => {
        this.user[e.target.name] = e.target.value;
        this.validateData(e);
      };
      validateData = (e) => {
        let results = this.schema.validate(this.user, { abortEarly: false });
        
        if (results.error) {
         if (e.target.name === "first_name") {
           if (results.error.details.find((error)=>error.path[0]==="first_name")) {
             this.setState({firstNameMsg:results.error.details.find((error)=>error.path[0]==="first_name").message});
           } else {
             this.setState({firstNameMsg : ""})
           }
         } else if (e.target.name === "last_name") {
          if (results.error.details.find((error)=>error.path[0]==="last_name")) {
            this.setState({lastNameMsg:results.error.details.find((error)=>error.path[0]==="last_name").message});
          } else {
            this.setState({lastNameMsg : ""})
          }
        } else if (e.target.name === "email") {
          if (results.error.details.find((error)=>error.path[0]==="email")) {
            this.setState({emailMsg:results.error.details.find((error)=>error.path[0]==="email").message});
          } else {
            this.setState({emailMsg : ""})
          }
        } else if (e.target.name === "password") {
          if (results.error.details.find((error)=>error.path[0]==="password")) {
            this.setState({passwordMsg:results.error.details.find((error)=>error.path[0]==="password").message});
          } else {
            this.setState({passwordMsg : ""})
          }
        } else if (e.target.name === "age") {
          if (results.error.details.find((error)=>error.path[0]==="age")) {
            this.setState({ageMsg:results.error.details.find((error)=>error.path[0]==="age").message});
          } else {
            this.setState({ageMsg : ""})
          }
        }
        this.setState({flag:false})
        } else {
          this.setState({flag:true , firstNameMsg : "" , lastNameMsg : "" , emailMsg :"" , ageMsg : "",passwordMsg: ""});
        }
      };
    
      sendData = async () => {
        console.log("click")
        let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup`,this.user);
        if (data.errors) {
          console.log(data.errors.email.message)
          this.setState({error:data.errors.email.message})
        } else {
          this.props.history.push("/login");
        }
      };

    render() {
        return (
            <React.Fragment>
              <div className="container my-5 py-5">
                <div className="form w-75 m-auto">
                  <div className="form-group">
                    <label className="text-white">first Name</label>
                    <input name="first_name" onInput={this.getFormData} type="text" className="form-control" /> 
                    {this.state.firstNameMsg !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.firstNameMsg}</div> : null}
                  </div>
      
                  <div className="form-group">
                    <label className="text-white">last Name</label>
                    <input name="last_name" onInput={this.getFormData} type="text" className="form-control"/> 
                    {this.state.lastNameMsg !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.lastNameMsg}</div> : null}
                  </div>
      
                  <div className="form-group">
                    <label className="text-white">email</label>
                    <input name="email" onInput={this.getFormData} type="text" className="form-control"/>
                    {this.state.emailMsg !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.emailMsg}</div> : null}
                  </div>
      
                  <div className="form-group">
                    <label className="text-white">password</label>
                    <input name="password" onInput={this.getFormData} type="password" className="form-control"/>
                    {this.state.passwordMsg !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.passwordMsg}</div> : null}
                  </div>
      
                  <div className="form-group">
                    <label className="text-white">age</label>
                    <input name="age" onInput={this.getFormData} type="text" className="form-control"/>
                    {this.state.ageMsg !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.ageMsg}</div> : null}
                  </div>
      
                  <button onClick={!this.state.flag ? null : this.sendData} className={`btn btn-primary text-white ${!this.state.flag ? `disabled ${registerCss.button}` : ""}`}>Register</button>
                  {this.state.error !== "" ? <div className = "alert alert-danger mt-1 text-center">{this.state.error}</div> : null}
      
                </div>
              </div>
            </React.Fragment>
          );
    }
}
