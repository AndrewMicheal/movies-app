(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{116:function(e,t,a){e.exports={button:"Register_button__CeYln"}},122:function(e,t,a){},142:function(e,t,a){},157:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},40:function(e,t,a){e.exports={myBackground:"Navbar_myBackground__2qAsY","nav-link":"Navbar_nav-link__2orcc",myColor:"Navbar_myColor__3-jQg"}},403:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),r=a(113),c=a.n(r),i=(a(122),a(39)),l=a(7),o=a(8),m=a(10),d=a(9),p=a(14),j=a(5),h=a.n(j),b=a(15),g=a(16),u=a.n(g),v=a(33),x=a.n(v),f=(a(142),a(0)),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],totalPage:1},e.getMovies=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=eda1636bfb0ecf2ce51b2d705926750e&page=1");case 2:a=t.sent,s=a.data,e.setState({movies:s.results,totalPage:s.total_pages});case 5:case"end":return t.stop()}}),t)}))),e.movieDetails=function(t){e.props.history.push("/movieDetail/".concat(t))},e.handlePageClick=function(t){var a=t.selected+1;e.props.history.push("/page/".concat(a))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"container py-5 my-5",children:Object(f.jsx)("div",{className:"row",children:this.state.movies.length>0?this.state.movies.map((function(t){return Object(f.jsx)("div",{className:"col-lg-4",onClick:function(){return e.movieDetails(t.id)},children:Object(f.jsxs)("div",{className:"movie",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:"w-100",alt:t.title}),Object(f.jsx)("h2",{className:"text-white text-center",children:t.title})]})},t.id)})):Object(f.jsx)("div",{className:"hm-spinner"})})}),this.state.movies.length>0?Object(f.jsx)("div",{className:"pageination m-auto text-center p-4",children:Object(f.jsx)(x.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.totalPage,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",disabledClassName:"paginationDisabled"})}):null]})}}]),a}(s.Component),N=a(27),y=a.n(N),w=(a(157),a(18)),k=a.n(w),C=new k.a({encodingType:"aes"}),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={flag:!1,emailMsg:"",passwordMsg:"",errorMsg:""},e.user={email:"",password:""},e.schema=y.a.object({email:y.a.string().email({tlds:{allow:["com","net"]}}).messages({"string.email":"email  must be a valid email","string.empty":"email is not allowed to be empty"}),password:y.a.string().pattern(new RegExp("^[a-zA-Z0-9]{3,}$")).required().messages({"string.pattern.base":"Enter password at least 3","string.empty":"password required"})}),e.getFormData=function(t){e.user[t.target.name]=t.target.value,e.validationData(t)},e.validationData=function(t){var a=e.schema.validate(e.user,{abortEarly:!1});a.error?("email"===t.target.name?a.error.details.find((function(e){return"email"===e.path[0]}))?e.setState({emailMsg:a.error.details.find((function(e){return"email"===e.path[0]})).message}):e.setState({emailMsg:""}):"password"===t.target.name&&(a.error.details.find((function(e){return"password"===e.path[0]}))?e.setState({passwordMsg:a.error.details.find((function(e){return"password"===e.path[0]})).message}):e.setState({passwordMsg:""})),e.setState({flag:!1})):e.setState({emailMsg:"",passwordMsg:"",flag:!0})},e.sendData=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("https://route-egypt-api.herokuapp.com/signin",e.user);case 2:a=t.sent,"success"===(s=a.data).message?(C.set("token",s.token),e.props.isAuth(!0),console.log(s.token),e.props.history.push("/home")):e.setState({errorMsg:s.message});case 5:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container my-5 py-5",children:Object(f.jsxs)("div",{className:"login-container m-auto",children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"Email"}),Object(f.jsx)("input",{name:"email",onInput:this.getFormData,type:"email",className:"form-control"}),""!==this.state.emailMsg?Object(f.jsx)("div",{className:"alert alert-danger text-center mt-1",children:this.state.emailMsg}):null]}),Object(f.jsxs)("div",{className:"form-group my-5",children:[Object(f.jsx)("label",{className:"text-white",children:"Password"}),Object(f.jsx)("input",{name:"password",onInput:this.getFormData,type:"password",className:"form-control"}),""!==this.state.passwordMsg?Object(f.jsx)("div",{className:"alert alert-danger text-center mt-1",children:this.state.passwordMsg}):null]}),Object(f.jsx)("button",{onClick:this.state.flag?this.sendData:null,className:"btn btn-primary text-white ".concat(this.state.flag?"":"disabled myButton"),children:"Login"}),""!==this.state.errorMsg?Object(f.jsx)("div",{className:"alert alert-danger text-center mt-2",children:this.state.errorMsg}):null]})})}}]),a}(s.Component),M=a(21),D=a(40),S=a.n(D),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ".concat(S.a.myBackground," "),children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("a",{className:"navbar-brand ".concat(S.a.myColor),href:"/",children:"Movie App"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(f.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(f.jsx)("li",{className:"nav-item mr-3",children:Object(f.jsx)(M.c,{className:"navbar-brand ".concat(S.a.myColor),to:"/login",children:"Login"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(M.c,{className:"navbar-brand ".concat(S.a.myColor),to:"/register",children:"Register"})})]})})]})})})}}]),a}(s.Component),F=a(115),P=a(52),A=a.n(P),L=new k.a({encodingType:"aes"}),I=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).logOut=function(){L.removeAll(),e.props.isAuth(!1)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=L.get("token"),t=Object(F.a)(e);return Object(f.jsx)(n.a.Fragment,{children:Object(f.jsx)("header",{className:"".concat(A.a.myBackground),children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(f.jsxs)("a",{className:"navbar-brand myColor text-capitalize",href:"/",children:["welcome ",t.first_name+" "+t.last_name]}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(f.jsxs)("ul",{className:"navbar-nav ml-auto  d-flex justify-content-between w-50 align-items-center",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(M.c,{className:"navbar-brand ".concat(A.a.myColor),to:"/home",children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(M.c,{className:"navbar-brand ".concat(A.a.myColor),to:"/tv",children:"Tv"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(M.b,{onClick:this.logOut,to:"/login",className:"logout",children:"Logout"})})]})})]})})})})}}]),a}(s.Component),K=new k.a({encodingType:"aes"}),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e;try{e=K.get("token")}catch(t){return localStorage.clear(),Object(f.jsx)(p.a,{to:"/login"})}return this.props.isAuth||e?Object(f.jsx)(p.b,Object(i.a)({},this.props)):Object(f.jsx)(p.a,{to:"/login"})}}]),a}(s.Component),E=a(116),R=a.n(E),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).user={first_name:"",last_name:"",email:"",password:"",age:""},e.state={error:"",firstNameMsg:"",lastNameMsg:"",emailMsg:"",passwordMsg:"",ageMsg:"",flag:!1},e.schema=y.a.object({first_name:y.a.string().pattern(new RegExp("^([a-zA-Z]+\\s*[A-Z]*)+$")).required().messages({"string.pattern.base":"Characters Only","string.empty":"First Name is not allowed to be empty"}),last_name:y.a.string().pattern(new RegExp("^([a-zA-Z]+\\s*[A-Z]*)+$")).required().messages({"string.pattern.base":"Characters Only","string.empty":"Last Name is not allowed to be empty"}),email:y.a.string().email({tlds:{allow:["com","net"]}}).messages({"string.email":"email  must be a valid email","string.empty":"email is not allowed to be empty"}),password:y.a.string().pattern(new RegExp("^[a-zA-Z0-9]{3,}$")).required().messages({"string.pattern.base":"Enter password at least 3","string.empty":"password required"}),age:y.a.number().integer().min(10).max(80).required().messages({"string.pattern.base":"Enter age between 10 and 80","string.empty":"age required"})}),e.getFormData=function(t){e.user[t.target.name]=t.target.value,e.validateData(t)},e.validateData=function(t){var a=e.schema.validate(e.user,{abortEarly:!1});a.error?("first_name"===t.target.name?a.error.details.find((function(e){return"first_name"===e.path[0]}))?e.setState({firstNameMsg:a.error.details.find((function(e){return"first_name"===e.path[0]})).message}):e.setState({firstNameMsg:""}):"last_name"===t.target.name?a.error.details.find((function(e){return"last_name"===e.path[0]}))?e.setState({lastNameMsg:a.error.details.find((function(e){return"last_name"===e.path[0]})).message}):e.setState({lastNameMsg:""}):"email"===t.target.name?a.error.details.find((function(e){return"email"===e.path[0]}))?e.setState({emailMsg:a.error.details.find((function(e){return"email"===e.path[0]})).message}):e.setState({emailMsg:""}):"password"===t.target.name?a.error.details.find((function(e){return"password"===e.path[0]}))?e.setState({passwordMsg:a.error.details.find((function(e){return"password"===e.path[0]})).message}):e.setState({passwordMsg:""}):"age"===t.target.name&&(a.error.details.find((function(e){return"age"===e.path[0]}))?e.setState({ageMsg:a.error.details.find((function(e){return"age"===e.path[0]})).message}):e.setState({ageMsg:""})),e.setState({flag:!1})):e.setState({flag:!0,firstNameMsg:"",lastNameMsg:"",emailMsg:"",ageMsg:"",passwordMsg:""})},e.sendData=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("click"),t.next=3,u.a.post("https://route-egypt-api.herokuapp.com/signup",e.user);case 3:a=t.sent,(s=a.data).errors?(console.log(s.errors.email.message),e.setState({error:s.errors.email.message})):e.props.history.push("/login");case 6:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(n.a.Fragment,{children:Object(f.jsx)("div",{className:"container my-5 py-5",children:Object(f.jsxs)("div",{className:"form w-75 m-auto",children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"first Name"}),Object(f.jsx)("input",{name:"first_name",onInput:this.getFormData,type:"text",className:"form-control"}),""!==this.state.firstNameMsg?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.firstNameMsg}):null]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"last Name"}),Object(f.jsx)("input",{name:"last_name",onInput:this.getFormData,type:"text",className:"form-control"}),""!==this.state.lastNameMsg?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.lastNameMsg}):null]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"email"}),Object(f.jsx)("input",{name:"email",onInput:this.getFormData,type:"text",className:"form-control"}),""!==this.state.emailMsg?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.emailMsg}):null]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"password"}),Object(f.jsx)("input",{name:"password",onInput:this.getFormData,type:"password",className:"form-control"}),""!==this.state.passwordMsg?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.passwordMsg}):null]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{className:"text-white",children:"age"}),Object(f.jsx)("input",{name:"age",onInput:this.getFormData,type:"text",className:"form-control"}),""!==this.state.ageMsg?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.ageMsg}):null]}),Object(f.jsx)("button",{onClick:this.state.flag?this.sendData:null,className:"btn btn-primary text-white ".concat(this.state.flag?"":"disabled ".concat(R.a.button)),children:"Register"}),""!==this.state.error?Object(f.jsx)("div",{className:"alert alert-danger mt-1 text-center",children:this.state.error}):null]})})})}}]),a}(s.Component),U=(a(162),new k.a({encodingType:"aes"})),z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tv:[],totalPage:1},e.getTv=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/tv/popular?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US&page=1");case 2:a=t.sent,s=a.data,e.setState({tv:s.results,totalPage:s.total_pages});case 5:case"end":return t.stop()}}),t)}))),e.tvDetails=function(t){e.props.history.push("/tvdetail/".concat(t))},e.handlePageClick=function(t){var a=t.selected+1;e.props.history.push("/tvpage/".concat(a))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getTv()}},{key:"render",value:function(){var e=this;return U.get("token")?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"container py-5 my-5",children:Object(f.jsx)("div",{className:"row",children:this.state.tv.length>0?this.state.tv.map((function(t){return Object(f.jsx)("div",{className:"col-lg-4 my-3",onClick:function(){return e.tvDetails(t.id)},children:Object(f.jsxs)("div",{className:"tv",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:"w-100",alt:t.title}),Object(f.jsx)("h2",{className:"text-white text-center",children:t.original_name})]})},t.id)})):Object(f.jsx)("div",{className:"hm-spinner"})})}),this.state.tv.length>0?Object(f.jsx)("div",{className:"pageination m-auto text-center p-4",children:Object(f.jsx)(x.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.totalPage,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",disabledClassName:"paginationDisabled"})}):null]}):Object(f.jsx)(p.a,{to:"/login"})}}]),a}(s.Component),Z=(a(163),a(164),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"jumbotron mt-5",children:[Object(f.jsx)("h1",{className:"display-4",children:"Not Found!"}),Object(f.jsx)("p",{className:"lead",children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(f.jsx)("hr",{className:"my-4"}),Object(f.jsx)("p",{children:"It uses utility classNamees for typography and spacing to space content out within the larger container."}),Object(f.jsx)("a",{className:"btn btn-primary btn-lg",href:"/",role:"button",children:"Learn more"})]})}}]),a}(s.Component)),H=new k.a({encodingType:"aes"}),Y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movie:{},cast:[],officalTrailerKey:""},e.getMovieDetail=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/movie/".concat(e.props.match.params.id,"?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 2:a=t.sent,s=a.data,e.setState({movie:s});case 5:case"end":return t.stop()}}),t)}))),e.getMovieCast=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/movie/".concat(e.props.match.params.id,"/credits?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 2:a=t.sent,s=a.data,e.setState({cast:s.cast.splice(0,6)});case 5:case"end":return t.stop()}}),t)}))),e.getOfficalTrailerKey=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("https://api.themoviedb.org/3/movie/".concat(e.props.match.params.id,"/videos?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 3:a=t.sent,s=a.data,e.setState({officalTrailerKey:s.results[0].key}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({officalTrailerKey:""});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){H.get("token")&&(this.getMovieDetail(),this.getMovieCast(),this.getOfficalTrailerKey())}},{key:"render",value:function(){var e;return H.get("token")?(e=this.state.movie?"https://image.tmdb.org/t/p/w500/".concat(this.state.movie.backdrop_path):"",Object(f.jsx)(n.a.Fragment,{children:this.state.movie?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("section",{className:"section-content",style:{backgroundImage:"url(".concat(e,")")},children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"movie-detail-content p-5 mt-4",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-6 my-3",children:Object(f.jsxs)("div",{className:"movie-content",children:[Object(f.jsx)("h2",{className:"movie-title",children:this.state.movie.title}),Object(f.jsx)("h3",{className:"movie-tagline my-3",children:this.state.movie.tagline}),Object(f.jsx)("p",{className:"movie-desc",children:this.state.movie.overview}),Object(f.jsxs)("span",{className:"realse-date",children:["release date :"," ",Object(f.jsx)("span",{className:"text-white",children:this.state.movie.release_date})," "]}),Object(f.jsxs)("span",{className:"vount-count",children:["vote count :"," ",Object(f.jsx)("span",{className:"text-white",children:this.state.movie.vote_count})]})]})}),Object(f.jsx)("div",{className:"col-lg-6",children:Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:e,className:"w-100",alt:this.state.movie.title})})})]})})})}),Object(f.jsxs)("section",{className:"cast my-5 py-5",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("span",{className:"cast-star",children:"*************************\xa0\xa0\xa0\xa0"}),Object(f.jsx)("span",{className:"cast-item",children:"Cast"}),Object(f.jsx)("span",{className:"cast-star",children:"\xa0\xa0\xa0\xa0*************************"})]}),Object(f.jsx)("div",{className:"container py-5 mt-5",children:Object(f.jsx)("div",{className:"row",children:this.state.cast?this.state.cast.map((function(e,t){return Object(f.jsx)("div",{className:"col-lg-2 my-3",children:Object(f.jsxs)("div",{className:"cast",children:[Object(f.jsx)("div",{className:"cast-image",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),className:"w-100",alt:e.name})}),Object(f.jsx)("h4",{className:"text-white text-center mt-2",children:e.name})]})},t)})):Object(f.jsx)("div",{className:"hm-spinner"})})})]}),Object(f.jsxs)("section",{className:"my-5 py-5",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("span",{className:"official-star",children:"*************************\xa0\xa0\xa0\xa0"}),Object(f.jsx)("span",{className:"official-trailer",children:"Official Trailer"}),Object(f.jsx)("span",{className:"official-star",children:"\xa0\xa0\xa0\xa0*************************"})]}),Object(f.jsx)("div",{className:"container my-5 py-4",children:""!==this.state.officalTrailerKey?Object(f.jsx)("iframe",{className:"trailer",src:"https://www.youtube.com/embed/".concat(this.state.officalTrailerKey),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):Object(f.jsx)(Z,{})})]})]}):null})):(H.removeAll(),Object(f.jsx)(p.a,{to:"/login"}))}}]),a}(s.Component),$=(a(165),new k.a({encodingType:"aes"})),J=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],page:e.props.match.params.id,totalPage:0},e.getFormData=function(){var t=Object(b.a)(h.a.mark((function t(a){var s,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=eda1636bfb0ecf2ce51b2d705926750e&page=".concat(a));case 2:s=t.sent,n=s.data,console.log(n),e.setState({movies:n.results,totalPage:n.total_pages});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePageClick=function(t){var a=t.selected+1;e.props.history.push("/page/".concat(a)),e.getFormData(a),e.setState({page:a})},e.movieDetails=function(t){e.props.history.push("/movieDetail/".concat(t))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){$.get("token")&&(console.log("yes Data"),this.getFormData(this.props.match.params.id))}},{key:"render",value:function(){var e=this;if($.get("token")){var t=Number(this.state.page);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"container py-5 my-5",children:Object(f.jsx)("div",{className:"row",children:this.state.movies.length>0?this.state.movies.map((function(t){return console.log("Movie Id : "+t.id),Object(f.jsx)("div",{className:"col-lg-4",onClick:function(){return e.movieDetails(t.id)},children:Object(f.jsxs)("div",{className:"movie",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:"w-100",alt:t.title}),Object(f.jsx)("h2",{className:"text-white text-center",children:t.title})]})},t.id)})):Object(f.jsx)("div",{className:"hm-spinner"})})}),this.state.movies.length>0?Object(f.jsx)("div",{className:"pageination m-auto text-center p-4",children:Object(f.jsx)(x.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.totalPage,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",disabledClassName:"paginationDisabled",initialPage:t-1})}):null]})}return Object(f.jsx)(p.a,{to:"/login"})}}]),a}(s.Component),Q=(a(166),new k.a({encodingType:"aes"})),V=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tv:{},cast:[],officalTrailerKey:""},e.getTvDetail=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/tv/".concat(e.props.match.params.id,"?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 2:a=t.sent,s=a.data,e.setState({tv:s});case 5:case"end":return t.stop()}}),t)}))),e.getTvCast=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/tv/".concat(e.props.match.params.id,"/credits?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 2:a=t.sent,s=a.data,e.setState({cast:s.cast.splice(0,6)});case 5:case"end":return t.stop()}}),t)}))),e.getOfficalTrailerKey=Object(b.a)(h.a.mark((function t(){var a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("https://api.themoviedb.org/3/tv/".concat(e.props.match.params.id,"/videos?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US"));case 3:a=t.sent,s=a.data,e.setState({officalTrailerKey:s.results[0].key}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({officalTrailerKey:""});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){Q.get("token")&&(this.getTvDetail(),this.getTvCast(),this.getOfficalTrailerKey())}},{key:"render",value:function(){var e;return Q.get("token")?(e=this.state.tv?"https://image.tmdb.org/t/p/w500/".concat(this.state.tv.backdrop_path):"",Object(f.jsxs)(n.a.Fragment,{children:[Object(f.jsx)("section",{className:"section-content",style:{backgroundImage:"url(".concat(e,")")},children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"tv-detail-content p-5 mt-4",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-7 my-3",children:Object(f.jsxs)("div",{className:"tv-content",children:[Object(f.jsx)("h2",{className:"tv-title",children:this.state.tv.name}),Object(f.jsx)("h3",{className:"tv-tagline my-3",children:this.state.tv.tagline}),Object(f.jsx)("p",{className:"tv-desc",children:this.state.tv.overview}),Object(f.jsxs)("span",{className:"number_of_episodes",children:["number of episodes :"," ",Object(f.jsx)("span",{className:"text-white",children:this.state.tv.number_of_episodes})," "]}),Object(f.jsxs)("span",{className:"number_of_seasons",children:["number of seasons :"," ",Object(f.jsx)("span",{className:"text-white",children:this.state.tv.number_of_seasons})," "]}),Object(f.jsxs)("span",{className:"vount-count",children:["vote count :"," ",Object(f.jsx)("span",{className:"text-white",children:this.state.tv.vote_count})]})]})}),Object(f.jsx)("div",{className:"col-lg-5",children:Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:e,className:"w-100",alt:this.state.tv.name})})})]})})})}),Object(f.jsxs)("section",{className:"cast my-5 py-5",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("span",{className:"cast-star",children:"*************************\xa0\xa0\xa0\xa0"}),Object(f.jsx)("span",{className:"cast-item",children:"Cast"}),Object(f.jsx)("span",{className:"cast-star",children:"\xa0\xa0\xa0\xa0*************************"})]}),Object(f.jsx)("div",{className:"container py-5 mt-5",children:Object(f.jsx)("div",{className:"row",children:this.state.cast?this.state.cast.map((function(e,t){return Object(f.jsx)("div",{className:"col-lg-2 my-3",children:Object(f.jsxs)("div",{className:"cast",children:[Object(f.jsx)("div",{className:"cast-image",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),className:"w-100",alt:e.name})}),Object(f.jsx)("h4",{className:"text-white text-center mt-2",children:e.name})]})},t)})):null})})]}),Object(f.jsxs)("section",{className:"my-5 py-5",children:[Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("span",{className:"official-star",children:"*************************\xa0\xa0\xa0\xa0"}),Object(f.jsx)("span",{className:"official-trailer",children:"Official Trailer"}),Object(f.jsx)("span",{className:"official-star",children:"\xa0\xa0\xa0\xa0*************************"})]}),Object(f.jsx)("div",{className:"container my-5 py-4",children:""!==this.state.officalTrailerKey?Object(f.jsx)("iframe",{className:"trailer",src:"https://www.youtube.com/embed/".concat(this.state.officalTrailerKey),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):Object(f.jsx)(Z,{})})]})]})):(Q.removeAll(),Object(f.jsx)(p.a,{to:"/login"}))}}]),a}(s.Component),G=(a(167),new k.a({encodingType:"aes"})),W=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={tv:[],page:e.props.match.params.id,totalPage:0},e.getFormData=function(){var t=Object(b.a)(h.a.mark((function t(a){var s,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("https://api.themoviedb.org/3/tv/popular?api_key=eda1636bfb0ecf2ce51b2d705926750e&language=en-US&page=".concat(a));case 2:s=t.sent,n=s.data,console.log(n),e.setState({tv:n.results,totalPage:n.total_pages});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePageClick=function(t){var a=t.selected+1;e.props.history.push("/tvpage/".concat(a)),e.getFormData(a),e.setState({page:a})},e.tvDetails=function(t){e.props.history.push("/tvdetail/".concat(t))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){G.get("token")&&this.getFormData(this.props.match.params.id)}},{key:"render",value:function(){var e=this;if(G.get("token")){var t=Number(this.state.page);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"container py-5 my-5",children:Object(f.jsx)("div",{className:"row",children:this.state.tv.length>0?this.state.tv.map((function(t){return Object(f.jsx)("div",{className:"col-lg-4",onClick:function(){return e.tvDetails(t.id)},children:Object(f.jsxs)("div",{className:"movie",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:"w-100",alt:t.name}),Object(f.jsx)("h2",{className:"text-white text-center",children:t.name})]})},t.id)})):Object(f.jsx)("div",{className:"hm-spinner"})})}),this.state.tv.length>0?Object(f.jsx)("div",{className:"pageination m-auto text-center p-4",children:Object(f.jsx)(x.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.totalPage,marginPagesDisplayed:2,pageRangeDisplayed:4,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active",disabledClassName:"paginationDisabled",initialPage:t-1})}):null]})}return Object(f.jsx)(p.a,{to:"/login"})}}]),a}(s.Component),X=a(117),ee=a.n(X),te=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(ee.a,{className:"particles",params:{particles:{number:{value:150},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0}},retina_detect:!0}})}}]),a}(s.Component),ae=new k.a({encodingType:"aes"}),se=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoggedIn:!1},e.isAuth=function(t){e.setState({isLoggedIn:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t=this;try{e=ae.get("token")}catch(a){localStorage.clear()}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(te,{className:"particles"}),Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)("div",{className:"center",children:[this.state.isLoggedIn||e?Object(f.jsx)(I,{isAuth:this.isAuth}):Object(f.jsx)(T,{}),Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{path:"/tv",component:z}),Object(f.jsx)(p.b,{path:"/login",render:function(e){return Object(f.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{isAuth:t.isAuth}))}}),Object(f.jsx)(p.b,{path:"/register",component:q}),Object(f.jsx)(B,{isAuth:this.state.isLoggedIn,path:"/home",component:O}),Object(f.jsx)(p.b,{path:"/movieDetail/:id",component:Y}),Object(f.jsx)(p.b,{path:"/page/:id",component:J}),Object(f.jsx)(p.b,{path:"/notfound",component:Z}),Object(f.jsx)(p.b,{path:"/tvdetail/:id",component:V}),Object(f.jsx)(p.b,{path:"/tvpage/:id",component:W}),Object(f.jsx)(p.b,{path:"/",exact:!0,component:this.state.isLoggedIn||ae.get("token")?O:q}),Object(f.jsx)(p.a,{to:"/notfound"})]})]})})]})}}]),a}(s.Component),ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,405)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};a(398),a(399),a(400);c.a.render(Object(f.jsx)(M.a,{children:Object(f.jsx)(se,{})}),document.getElementById("root")),ne()},52:function(e,t,a){e.exports={myBackground:"NavbarHome_myBackground__3u5p3","nav-link":"NavbarHome_nav-link__217JV",myColor:"NavbarHome_myColor__3054a"}}},[[403,1,2]]]);
//# sourceMappingURL=main.a6887d40.chunk.js.map