(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(84)},38:function(e,t,a){},40:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),c=a.n(o),s=(a(38),a(3)),i=a.n(s),l=a(6),u=a(8),d=a(9),p=a(11),v=a(10),h=a(12),f=(a(40),a(15)),g=a(5),m=a.n(g),b=a(4),y=a(16);function k(){var e=Object(f.a)(["\n    :hover{\n        background-color:#eee;\n    }\n    height:100px;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n"]);return k=function(){return e},e}var A=y.a.div(k()),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={actorsList:[],value:"",selectedActor:{},noActor:!0},a.onEnter=function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.value){e.next=6;break}return e.next=4,m.a.get("https://api.themoviedb.org/3/search/person?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&query=".concat(a.state.value,"&page=1&include_adult=false")).then(function(e){a.setState({actorsList:e.data.results,noActor:!1})});case 4:e.next=7;break;case 6:a.setState({actorsList:[],noActor:!0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.selectActor=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,r=n.getAttribute("value"),a.setState({value:"",actorsList:[],selectedActor:JSON.parse(r)}),a.props.setActor(JSON.parse(r),"first");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.actorsList,n=t.selectedActor,o=t.value;return r.a.createElement(b.b,{color:"white",shape:"rounded",padding:3,display:"flex",direction:"row",alignItems:"center"},r.a.createElement(b.b,{flex:"grow",paddingX:2},r.a.createElement("form",{onSubmit:function(t){return e.onEnter(t)}},r.a.createElement(b.f,{accessibilityLabel:"Demo Search Field",id:"searchField",onChange:function(t){var a=t.value;return e.setState({value:a})},placeholder:"Search and explore",value:o})),a.map(function(t){if(t.profile_path)return r.a.createElement(A,{key:t.id,value:JSON.stringify(t,null,2),onClick:function(t){return e.selectActor(t)}},r.a.createElement("img",{value:JSON.stringify(t,null,2),src:"https://image.tmdb.org/t/p/h100".concat(t.profile_path),alt:""}),r.a.createElement("p",{value:JSON.stringify(t,null,2)},t.name))}),this.state.noActor&&r.a.createElement("div",null,"No actor found"),n&&r.a.createElement(A,{key:n.id,value:JSON.stringify(n,null,2),onClick:function(t){return e.selectActor(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/h100".concat(n.profile_path),alt:""}),r.a.createElement("p",null,n.name))))}}]),t}(r.a.Component);function x(){var e=Object(f.a)(["\n    :hover{\n        background-color:#eee;\n    }\n    height:100px;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n"]);return x=function(){return e},e}var S=y.a.div(x()),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={actorsList:[],value:"",selectedActor:{},noActor:!0},a.onEnter=function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.value){e.next=6;break}return e.next=4,m.a.get("https://api.themoviedb.org/3/search/person?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&query=".concat(a.state.value,"&page=1&include_adult=false")).then(function(e){a.setState({actorsList:e.data.results,noActor:!1})});case 4:e.next=7;break;case 6:a.setState({actorsList:[],noActor:!0});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.selectActor=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,r=n.getAttribute("value"),a.setState({value:"",actorsList:[],selectedActor:JSON.parse(r)}),a.props.setActor(JSON.parse(r),"second");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.actorsList,n=t.selectedActor,o=t.value;return r.a.createElement(b.b,{color:"white",shape:"rounded",padding:3,display:"flex",direction:"row",alignItems:"center"},r.a.createElement(b.b,{flex:"grow",paddingX:2},r.a.createElement("form",{onSubmit:function(t){return e.onEnter(t)}},r.a.createElement(b.f,{accessibilityLabel:"Demo Search Field",id:"searchField",onChange:function(t){var a=t.value;return e.setState({value:a})},placeholder:"Search and explore",value:o})),a.map(function(t){if(t.profile_path)return r.a.createElement(S,{key:t.id,value:JSON.stringify(t,null,2),onClick:function(t){return e.selectActor(t)}},r.a.createElement("img",{value:JSON.stringify(t,null,2),src:"https://image.tmdb.org/t/p/h100".concat(t.profile_path),alt:""}),r.a.createElement("p",{value:JSON.stringify(t,null,2)},t.name))}),this.state.noActor&&r.a.createElement("div",null,"No actor found"),n&&r.a.createElement(S,{key:n.id,value:JSON.stringify(n,null,2),onClick:function(t){return e.selectActor(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/h100".concat(n.profile_path),alt:""}),r.a.createElement("p",null,n.name))))}}]),t}(r.a.Component),w=a(14),O=a(30),_=a.n(O),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={movie:{},isMovie:!0},a.state={hovered:!1},a.handleMouseEnter=a._handleMouseEnter.bind(Object(w.a)(a)),a.handleMouseLeave=a._handleMouseLeave.bind(Object(w.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(this.props.movie,"?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US")).then(function(e){console.log(e),t.setState({movie:e.data,isMovie:!0})});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,m.a.get("https://api.themoviedb.org/3/tv/".concat(this.props.movie,"?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US")).then(function(e){console.log(e.data),t.setState({movie:e.data,isMovie:!1})});case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"_handleMouseEnter",value:function(){this.setState(function(){return{hovered:!0}})}},{key:"_handleMouseLeave",value:function(){this.setState(function(){return{hovered:!1}})}},{key:"render",value:function(){return this.state.movie?r.a.createElement(b.b,{maxWidth:236,padding:2,column:12},r.a.createElement(b.d,{image:r.a.createElement(b.a,{name:"James Jones",src:"https://image.tmdb.org/t/p/w500".concat(this.state.movie.poster_path)}),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},r.a.createElement(b.g,{align:"center",bold:!0,size:"xl"},r.a.createElement(b.e,{href:"https://pinterest.com"},this.state.isMovie?r.a.createElement(b.b,{paddingX:3,paddingY:2},this.state.movie.original_title):r.a.createElement(b.b,{paddingX:3,paddingY:2},this.state.movie.name))),r.a.createElement(b.c,{accessibilityLabel:"Follow James Jones",color:"red",text:"Look on tmdb"}))):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(this.props.sameMovies),r.a.createElement("div",null,this.props.loadingMovies&&r.a.createElement(_.a,{type:"Puff",color:"#00BFFF",height:"100",width:"100"}),r.a.createElement("button",{onClick:this.props.startMatching},"Start Matching"),this.props.sameMovies.map(function(e){return r.a.createElement(j,{key:e,movie:e}," ")}),this.props.sameMovies.length<1&&r.a.createElement("h1",null,"No common Movies"))}}]),t}(r.a.Component),J=(a(83),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={firstActor:{},secondActor:{},loadingMovies:!1,firstActorMovies:[],secondActorMovies:[],sameMovies:[]},a.setActor=function(){var e=Object(l.a)(i.a.mark(function e(t,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("first"!=n){e.next=10;break}if(a.setState({firstActor:t}),!t.id){e.next=8;break}return a.setState({loadingMovies:!0}),e.next=6,m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=".concat(t.id)).then(function(){var e=Object(l.a)(i.a.mark(function e(n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=1;case 1:if(!(r<=n.data.total_pages)){e.next=8;break}return console.log("page ".concat(r)),e.next=5,m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(r,"&with_cast=").concat(t.id)).then(function(e){a.setState({firstActorMovies:a.state.firstActorMovies.concat(e.data.results)}),console.log(e.data.results)});case 5:r++,e.next=1;break;case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 6:return e.next=8,m.a.get("https://api.themoviedb.org/3/person/".concat(t.id,"/tv_credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US")).then(function(e){a.setState({firstActorMovies:a.state.firstActorMovies.concat(e.data.cast)})});case 8:e.next=22;break;case 10:if("second"!=n){e.next=22;break}if(a.setState({secondActor:t}),!t.id){e.next=21;break}return console.log(t.id),a.setState({loadingMovies:!0}),e.next=17,m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=".concat(t.id)).then(function(){var e=Object(l.a)(i.a.mark(function e(n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),r=1;case 2:if(!(r<=n.data.total_pages)){e.next=9;break}return console.log("page ".concat(r)),e.next=6,m.a.get("https://api.themoviedb.org/3/discover/movie?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(r,"&with_cast=").concat(t.id)).then(function(e){a.setState({secondActorMovies:a.state.secondActorMovies.concat(e.data.results)})});case 6:r++,e.next=2;break;case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 17:return e.next=19,m.a.get("https://api.themoviedb.org/3/person/".concat(t.id,"/tv_credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US")).then(function(e){a.setState({secondActorMovies:a.state.secondActorMovies.concat(e.data.cast)})});case 19:e.next=22;break;case 21:console.error("no id");case 22:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.startMatching=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({sameMovies:[]}),!(a.state.firstActorMovies.length>1&&a.state.secondActorMovies.length>1)){e.next=3;break}return e.delegateYield(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("start lopping over ".concat(a.state.firstActorMovies.length)),t={},n={},console.log(a.state.firstActorMovies),console.log(a.state.secondActorMovies),a.state.firstActorMovies.length>a.state.secondActorMovies.length?(t=a.state.secondActorMovies,n=a.state.firstActor):(t=a.state.firstActorMovies,n=a.state.secondActor),r=1;case 7:if(!(r<=t.length)){e.next=17;break}return e.prev=8,e.delegateYield(i.a.mark(function e(){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t[r].id,!t[r].original_name){e.next=7;break}return console.log(t[r].original_name),e.next=5,m.a.get("https://api.themoviedb.org/3/tv/".concat(o,"/season/1/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US")).then(function(e){console.log(e.data.cast),console.log(n.name);for(var t=0;t<=e.data.cast.length;t++)e.data.cast[t].name.includes(n.name)&&a.setState({sameMovies:a.state.sameMovies.concat(o)})});case 5:e.next=9;break;case 7:return e.next=9,m.a.get("https://api.themoviedb.org/3/movie/".concat(o,"/credits?api_key=d4c86d3d23078bb5e3ea14ae379a2726")).then(function(e){for(var t=0;t<=e.data.cast.length;t++)e.data.cast[t].name.includes(n.name)&&a.setState({sameMovies:a.state.sameMovies.concat(o)})});case 9:case"end":return e.stop()}},e)})(),"t0",10);case 10:e.next=14;break;case 12:e.prev=12,e.t1=e.catch(8);case 14:r++,e.next=7;break;case 17:a.setState({loadingMovies:!1});case 18:case"end":return e.stop()}},e,null,[[8,12]])})(),"t0",3);case 3:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(this.state.firstActorMovies),console.log(this.state.secondActorMovies),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("h1",null,"Select your first actor"),r.a.createElement(M,{setActor:this.setActor})),r.a.createElement(L,{sameMovies:this.state.sameMovies,startMatching:this.startMatching,loadingMovies:this.state.loadingMovies}),r.a.createElement("div",null,r.a.createElement("h1",null,"Select your second Actor"),r.a.createElement(E,{setActor:this.setActor})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.72a50308.chunk.js.map