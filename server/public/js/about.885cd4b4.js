(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"615f":function(e,t,i){"use strict";var r=i("a915"),s=i.n(r);s.a},a915:function(e,t,i){},da27:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("nav-admin"),i("h1",[e._v("Movies Admin")]),i("div",[i("h3",[e._v("Add One")]),i("label",{attrs:{for:"id"}},[e._v("IMBD ID")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.imdbId,expression:"imdbId"}],attrs:{id:"id",type:"text"},domProps:{value:e.imdbId},on:{input:function(t){t.target.composing||(e.imdbId=t.target.value)}}}),i("button",{on:{click:function(t){return e.getNewMovieData(e.imdbId)}}},[e._v("Add")]),i("br"),i("br")]),i("div",{staticClass:"filter"},[i("div",{staticClass:"filter-by"},[i("div",{staticClass:"filter-by-select"},[i("label",[e._v("Fliter By:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.filterBy,expression:"filterBy"}],on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filterBy=t.target.multiple?i:i[0]},e.applyFilter]}},[i("option",[e._v("year")]),i("option",[e._v("mood")]),i("option",[e._v("prime")]),i("option",[e._v("imdbId")]),i("option",[e._v("title")])]),i("label",{attrs:{for:"sortAnger"}},[e._v("Sort by:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.sort,expression:"sort"}],on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sort=t.target.multiple?i:i[0]},e.applyFilter]}},[i("option",[e._v("imdbRating")]),i("option",[e._v("Released")]),i("option",[e._v("Title")]),i("option",[e._v("Anger")]),i("option",[e._v("Joy")])])]),"year"===e.filterBy?i("div",[i("label",{attrs:{for:"filterYear"}},[e._v("Release Year")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterYear,expression:"filterYear"}],attrs:{id:"filterYear",type:"text"},domProps:{value:e.filterYear},on:{input:function(t){t.target.composing||(e.filterYear=t.target.value)}}})]):e._e(),"mood"===e.filterBy?i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.filterMood,expression:"filterMood"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.filterMood=t.target.multiple?i:i[0]}}},[i("option",[e._v("Anger")]),i("option",[e._v("Anticipation")]),i("option",[e._v("Joy")]),i("option",[e._v("Trust")]),i("option",[e._v("Fear")]),i("option",[e._v("Surprise")]),i("option",[e._v("Sadness")]),i("option",[e._v("Disgust")])])]):e._e(),"imdbId"===e.filterBy?i("div",[i("label",{attrs:{for:"filterImdbId"}},[e._v("IMDb ID")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterImdbId,expression:"filterImdbId"}],attrs:{id:"filterImdbId",type:"text"},domProps:{value:e.filterImdbId},on:{input:function(t){t.target.composing||(e.filterImdbId=t.target.value)}}})]):e._e(),"title"===e.filterBy?i("div",[i("label",{attrs:{for:"filterTitle"}},[e._v("Movie Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterTitle,expression:"filterTitle"}],attrs:{id:"filterTitle",type:"text"},domProps:{value:e.filterTitle},on:{input:function(t){t.target.composing||(e.filterTitle=t.target.value)}}})]):e._e()]),i("label",{attrs:{for:"filterCount"}},[e._v("Count")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterCount,expression:"filterCount"}],attrs:{id:"filterCount",type:"text"},domProps:{value:e.filterCount},on:{input:function(t){t.target.composing||(e.filterCount=t.target.value)}}}),i("label",{attrs:{for:"filterPage"}},[e._v("Page")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterPage,expression:"filterPage"}],attrs:{id:"filterPage",type:"text"},domProps:{value:e.filterPage},on:{input:function(t){t.target.composing||(e.filterPage=t.target.value)}}}),e.allMovies?i("span",[e._v("Count: "+e._s(e.resultCount))]):e._e(),i("button",{on:{click:e.getMovies}},[e._v("filter")])]),e.allMovies?i("table",[i("tr",[i("th",{staticClass:"poster"},[e._v("S3 Poster")]),i("th",{staticClass:"id"},[e._v("IMDb Rating")]),i("th",{staticClass:"imdbID"},[e._v("IMDb ID")]),i("th",{staticClass:"imdbID"},[e._v("ASIN")]),i("th",{staticClass:"title",on:{click:function(t){return e.sortMovies("Title")}}},[e._v("Title")]),i("th",{staticClass:"actors"},[e._v("Actors")]),i("th",{staticClass:"genre"},[e._v("Genre")]),i("th",{staticClass:"rated"},[e._v("Rated")]),i("th",{staticClass:"director"},[e._v("Director")]),i("th",{staticClass:"released"},[e._v("Released")]),i("th",{staticClass:"language"},[e._v("Language")]),i("th",{staticClass:"mood"},[e._v("Anger")]),i("th",{staticClass:"mood"},[e._v("Anticipation")]),i("th",{staticClass:"mood"},[e._v("Joy")]),i("th",{staticClass:"mood"},[e._v("Trust")]),i("th",{staticClass:"mood"},[e._v("Fear")]),i("th",{staticClass:"mood"},[e._v("Surprise")]),i("th",{staticClass:"mood"},[e._v("Sadness")]),i("th",{staticClass:"mood"},[e._v("Dusgust")]),i("th",[e._v("Edit")])]),e._l(e.allMovies,(function(t){return i("tr",{key:t._id},[i("td",{staticClass:"order-info poster"},[i("router-link",{attrs:{to:"/admin/moods/"+t._id}},[i("poster",{key:t._id,staticClass:"moodPoster",attrs:{poster:t.moodPoster,id:t._id,omdbPoster:t.Poster}})],1),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Poster,expression:"movie.Poster"}],attrs:{type:"text"},domProps:{value:t.Poster},on:{input:function(i){i.target.composing||e.$set(t,"Poster",i.target.value)}}}):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.moodPoster,expression:"movie.moodPoster"}],attrs:{type:"text"},domProps:{value:t.moodPoster},on:{input:function(i){i.target.composing||e.$set(t,"moodPoster",i.target.value)}}}):e._e()],1),i("td",{staticClass:"order-info"},[i("div",{staticClass:"id"},[e.edit!=t._id?i("span",[e._v(e._s(t.imdbRating))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.imdbRating,expression:"movie.imdbRating"}],attrs:{type:"number"},domProps:{value:t.imdbRating},on:{input:function(i){i.target.composing||e.$set(t,"imdbRating",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"imdbID"},[e.edit!=t._id?i("span",[e._v(e._s(t.imdbID))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.imdbID,expression:"movie.imdbID"}],attrs:{type:"text"},domProps:{value:t.imdbID},on:{input:function(i){i.target.composing||e.$set(t,"imdbID",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"asin"},[e.edit!=t._id?i("span",[e._v(e._s(t.asin))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.asin,expression:"movie.asin"}],attrs:{type:"text"},domProps:{value:t.asin},on:{input:function(i){i.target.composing||e.$set(t,"asin",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"title"},[i("span",[e._v(e._s(t.Title))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"actors"},[i("span",[e._v(e._s(t.Actors))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"genre"},[i("span",[e._v(e._s(t.Genre))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"rated"},[i("span",[e._v(e._s(t.Rated))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"director"},[i("span",[e._v(e._s(t.Director))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"released"},[i("span",[e._v(e._s(t.Released))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"language"},[i("span",[e._v(e._s(t.Language))])])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Anger))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Anger,expression:"movie.Anger"}],attrs:{type:"number"},domProps:{value:t.Anger},on:{input:function(i){i.target.composing||e.$set(t,"Anger",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Anticipation))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Anticipation,expression:"movie.Anticipation"}],attrs:{type:"number"},domProps:{value:t.Anticipation},on:{input:function(i){i.target.composing||e.$set(t,"Anticipation",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Joy))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Joy,expression:"movie.Joy"}],attrs:{type:"number"},domProps:{value:t.Joy},on:{input:function(i){i.target.composing||e.$set(t,"Joy",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Trust))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Trust,expression:"movie.Trust"}],attrs:{type:"number"},domProps:{value:t.Trust},on:{input:function(i){i.target.composing||e.$set(t,"Trust",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Fear))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Fear,expression:"movie.Fear"}],attrs:{type:"number"},domProps:{value:t.Fear},on:{input:function(i){i.target.composing||e.$set(t,"Fear",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Surprise))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Surprise,expression:"movie.Surprise"}],attrs:{type:"number"},domProps:{value:t.Surprise},on:{input:function(i){i.target.composing||e.$set(t,"Surprise",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Sadness))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Sadness,expression:"movie.Sadness"}],attrs:{type:"number"},domProps:{value:t.Sadness},on:{input:function(i){i.target.composing||e.$set(t,"Sadness",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info"},[i("div",{staticClass:"mood"},[e.edit!=t._id?i("span",[e._v(e._s(t.Disgust))]):e._e(),e.edit===t._id?i("input",{directives:[{name:"model",rawName:"v-model",value:t.Disgust,expression:"movie.Disgust"}],attrs:{type:"number"},domProps:{value:t.Disgust},on:{input:function(i){i.target.composing||e.$set(t,"Disgust",i.target.value)}}}):e._e()])]),i("td",{staticClass:"order-info edit"},[e.edit!=t._id?i("a",{on:{click:function(i){e.edit=t._id}}},[e._v("edit")]):e._e(),e.edit===t._id?i("a",{on:{click:function(t){e.edit=""}}},[e._v("cancel")]):e._e(),i("br"),e.edit===t._id?i("a",{on:{click:function(i){return e.updateMovie(t)}}},[e._v("update")]):e._e(),i("br"),e.edit===t._id?i("a",{on:{click:function(i){return e.deleteMovie(t._id)}}},[e._v("delete")]):e._e()])])}))],2):e._e()],1)},s=[],a=(i("55dd"),i("96cf"),i("3b8d")),n=i("e4bb"),o=i("383d"),d=i("d225"),l=i("b0b4"),u=i("bc3a"),c=i.n(u),v="http://www.omdbapi.com/?apikey=6fed019",p=function(){function e(){Object(d["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getMovieData",value:function(e){return new Promise(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(i,r){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(v),{params:{i:e}});case 3:s=t.sent,a=s.data,i(a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,i){return t.apply(this,arguments)}}())}}]),e}(),m=p,f=i("00c6"),g="/api/imdbid/",_=function(){function e(){Object(d["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getMovieIds",value:function(e){return new Promise(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(i,r){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("".concat(g),{params:{year:e.year,start:e.start,count:e.count}});case 3:s=t.sent,a=s.data,i(a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,i){return t.apply(this,arguments)}}())}}]),e}(),h=_,b=i("f647"),y={name:"Movies",data:function(){return{edit:"",filterBy:"year",sort:"imdbRating",order:1,imdbId:"",url:"",imdbYear:"",imdbStart:"1",imdbCount:"10",result:[],moviesToBeAdded:[],allMovies:null,filterYear:null,filterMood:"Anger",filterImdbId:"",filterTitle:"",filterPage:1,filterCount:20,response:null,windows:null,primeIds:[],error:""}},components:{Poster:n["a"],NavAdmin:o["a"]},computed:{resultCount:function(){return this.allMovies.length}},created:function(){this.getMovies()},methods:{getNewMovieData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.getMovieData(t);case 2:return this.newMovie=e.sent,e.next=5,f["a"].insertMovie({imdbId:t,Actors:this.newMovie.Actors,Awards:this.newMovie.Awards,BoxOffice:this.newMovie.BoxOffice,Country:this.newMovie.Country,DVD:this.newMovie.DVD,Director:this.newMovie.Director,Genre:this.newMovie.Genre,Language:this.newMovie.Language,Metascore:this.newMovie.Metascore,Plot:this.newMovie.Plot,Poster:this.newMovie.Poster,Production:this.newMovie.Production,Rated:this.newMovie.Rated,Ratings:this.newMovie.Ratings,Released:this.newMovie.Released,Response:this.newMovie.Response,Runtime:this.newMovie.Runtime,Title:this.newMovie.Title,Type:this.newMovie.Type,Website:this.newMovie.Website});case 5:this.getMovies();case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getMovies:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("year"!==this.filterBy){e.next=4;break}return e.next=3,f["a"].getMovies({by:this.filterBy,year:this.filterYear,count:this.filterCount,page:this.filterPage,sort:this.sort,order:this.order});case 3:this.allMovies=e.sent;case 4:if("imdbId"!==this.filterBy){e.next=8;break}return e.next=7,f["a"].getMovies({by:this.filterBy,imdbId:this.filterImdbId});case 7:this.allMovies=e.sent;case 8:if("title"!==this.filterBy){e.next=12;break}return e.next=11,f["a"].getMovies({by:this.filterBy,title:this.filterTitle,count:this.filterCount,page:this.filterPage});case 11:this.allMovies=e.sent;case 12:if("mood"!==this.filterBy){e.next=16;break}return e.next=15,f["a"].getMoviesByMood({by:this.filterBy,mood:this.filterMood,count:this.filterCount,page:this.filterPage});case 15:this.allMovies=e.sent;case 16:if("prime"!==this.filterBy){e.next=20;break}return e.next=19,f["a"].getMovies({by:this.filterBy,count:this.filterCount,page:this.filterPage});case 19:this.allMovies=e.sent;case 20:this.edit=null;case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateMoviePoster:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i="https://mood2watch.s3.amazonaws.com/"+this.response,e.next=3,f["a"].updateMoviePoster({id:t,poster:i});case 3:this.getMovies();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteMovie:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].deleteMovie(t);case 2:this.getMovies();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),scrapeIds:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.getMovieIds({year:this.imdbYear,start:this.imdbStart,count:this.imdbCount});case 2:this.result=e.sent,t=this.result.length,i=0;case 5:if(!(i<t)){e.next=13;break}return e.next=8,m.getMovieData(this.result[i]);case 8:r=e.sent,this.moviesToBeAdded.push(r);case 10:i++,e.next=5;break;case 13:return e.next=15,f["a"].addManyMovies(this.moviesToBeAdded);case 15:this.getMovies(),this.moviesToBeAdded=[];case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getPoster:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].getPoster(t);case 2:this.response=e.sent,this.updateMoviePoster(t.id);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),applyFilter:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"prime"===this.filterBy&&this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateMovie:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].updateMovie(t);case 2:this.getMovies();case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),sortMovies:function(e){this.sort=e,this.order=-1,this.getMovies()}}},w=y,M=(i("615f"),i("2877")),C=Object(M["a"])(w,r,s,!1,null,"86998404",null);t["default"]=C.exports}}]);
//# sourceMappingURL=about.885cd4b4.js.map