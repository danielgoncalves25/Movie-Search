(this.webpackJsonpmovies_app=this.webpackJsonpmovies_app||[]).push([[0],{34:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(0),i=c.n(n),r=c(12),s=c.n(r),j=(c(34),c(28)),o=c(7),l="7a2b146945e7e94852aa5e4f15ed5478",u=Object(n.createContext)(),b=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)(""),j=Object(o.a)(s,2),b=j[0],h=j[1],v=Object(n.useState)(!1),O=Object(o.a)(v,2),d=O[0],p=O[1],m=Object(n.useState)(!0),x=Object(o.a)(m,2),f=x[0],g=x[1];return Object(n.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3/movie/popular?","api_key=").concat(l,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){r(e.results)}))}),[]),!0===d&&""!==b&&fetch("".concat("https://api.themoviedb.org/3/search/movie?","api_key=").concat(l,"&language=en-US&query=").concat(b,"&page=1")).then((function(e){return e.json()})).then((function(e){if(e.results.length>0){var t=e.results.filter((function(e){return null!=e.poster_path}));r(t),g(!0),p(!1),h("")}else g(!1)})),Object(a.jsx)(u.Provider,{value:{value1:[b,h],value2:[i,r],value3:[d,p],value4:[f,g]},children:e.children})},h=function(e){var t=e.title,c=e.release_date,n=e.poster_path,i=e.vote_average,r=e.overview;return Object(a.jsx)("section",{className:"movie-container",children:Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsxs)("figure",{className:"movie-front",children:[Object(a.jsx)("img",{src:"http://image.tmdb.org/t/p/w1280"+n,alt:""}),Object(a.jsx)("div",{className:"rating-container",children:Object(a.jsx)("p",{id:"rating",style:{color:i<4?"red":i>=4&&i<7?"orange":"green"},children:i})}),Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("p",{children:c})]})]}),Object(a.jsx)("figure",{className:"movie-back",children:Object(a.jsxs)("p",{children:[" ",r]})})]})})},v=function(){var e=Object(n.useContext)(u),t=e.value2,c=e.value4,i=Object(o.a)(t,2),r=i[0],s=(i[1],Object(o.a)(c,2)),l=s[0];s[1];return Object(a.jsx)("div",{className:l?"movie-list":"try-again",children:l?r.map((function(e){return Object(a.jsx)(h,Object(j.a)({},e),e.id)})):Object(a.jsx)("h2",{children:"We couldn't find any movies with that name. Please try again!"})})},O=c(24),d=c(27),p=c(26),m=c(17),x=c(25),f=function(){var e=Object(n.useContext)(u),t=e.value1,c=e.value2,i=e.value3,r=Object(o.a)(t,2),s=r[0],j=r[1],l=Object(o.a)(c,2),b=(l[0],l[1],Object(o.a)(i,2)),h=(b[0],b[1]);return Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a.Brand,{href:"https://danielgoncalves25.github.io/Movie-Search/",children:Object(a.jsx)("p",{children:" Daniel Goncalves "})}),Object(a.jsx)(d.a,{className:"mr-auto"}),Object(a.jsxs)(p.a,{inline:!0,children:[Object(a.jsx)(m.a,{type:"text",placeholder:"Search for a movie",className:"mr-sm-2 search",value:s,onChange:function(e){j(e.target.value)}}),Object(a.jsx)(x.a,{onClick:function(){h(!0)},variant:"outline-info",children:"Search"})]})]})};var g=function(){return Object(a.jsx)(b,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsx)(v,{})]})})};c(38);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.64892c43.chunk.js.map