(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),c=n(14),o=n(10),u=n(11),s=n(13),d=n(12),p=n(15);var m=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},h=n(21),f={linkedInSearch:function(e){return h({method:"GET",url:"https://linkedin-id-search-v2.p.rapidapi.com/api/"+e,headers:{"content-type":"application/octet-stream","x-rapidapi-host":"linkedin-id-search-v2.p.rapidapi.com","x-rapidapi-key":"7984cc2852msh588e23d14de2975p1aac9ejsndf173a4e58c1",useQueryString:!0}})},getDevelopers:function(){return h.get("/api/developers")},getDeveloper:function(e){return h.get("/api/developers/"+e)},getDeveloperSkill:function(e){return h.get("/api/developers/"+e)},saveDeveloper:function(e){return h.post("/api/developers",e)}};var v=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Developer",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))},g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={result:{},search:""},n.handleFormSubmit=function(e){e.preventDefault(),console.log(n.state.search),n.loadNextUser(n.state.search)},n.handleChange=function(e){return n.setState(Object(c.a)({},n.state,{search:e.target.value}))},n.loadNextUser=function(e){f.linkedInSearch(e).then(function(e){return n.setState({result:e.data})}).catch(function(e){return console.log(e)})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadNextUser("jon")}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement(v,{handleInputChange:this.handleChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement("h1",null,"Profile Page"),r.a.createElement("h4",null,"Profile Information:"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.")))}}]),t}(a.Component);var b=function(){return r.a.createElement(g,null)};i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b0331bb.chunk.js.map