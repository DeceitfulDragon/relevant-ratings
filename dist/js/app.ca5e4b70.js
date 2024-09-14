(function(){"use strict";var e={653:function(e,t,i){var o=i(3751),s=i(641),a=i.p+"img/logo.c4c4dce4.webp";const r={id:"app",class:"bg-gray-900 text-white font-sans"},n={class:"p-6 bg-gray-800 shadow-lg flex items-center justify-between"},l={class:"flex items-center space-x-4"},c={class:"flex items-center space-x-4"},d={class:"p-5"},v={class:"mb-6 border-b-4 border-x-4 border-gray-800"},u={class:"flex items-center space-x-4 mt-4"},h={class:"flex items-center space-x-2"},g={class:"flex items-center space-x-2 flex-grow"},p={class:"mt-6"},m={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4"};function f(e,t,i,f,b,y){const k=(0,s.g2)("api-key-modal"),x=(0,s.g2)("movie-form"),M=(0,s.g2)("search-bar"),w=(0,s.g2)("movie-card");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.Lk)("header",n,[(0,s.Lk)("div",l,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>y.toggleForm&&y.toggleForm(...e)),class:"bg-cyan-500 hover:bg-cyan-600 text-white rounded-full h-12 w-12 flex items-center justify-center"},t[7]||(t[7]=[(0,s.Lk)("span",{class:"text-2xl"},"+",-1)])),t[8]||(t[8]=(0,s.Lk)("img",{src:a,alt:"Relevant Ratings Logo",class:"h-12 w-auto"},null,-1))]),(0,s.Lk)("div",c,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>y.saveMoviesToFile&&y.saveMoviesToFile(...e)),class:"bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 ml-4 rounded"},t[9]||(t[9]=[(0,s.Lk)("i",{class:"fa-solid fa-floppy-disk"},null,-1),(0,s.eW)(" Save")])),(0,s.Lk)("input",{type:"file",onChange:t[2]||(t[2]=(...e)=>y.loadMoviesFromFile&&y.loadMoviesFromFile(...e)),class:"hidden",ref:"fileInput"},null,544),(0,s.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>y.triggerFileInput&&y.triggerFileInput(...e)),class:"bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 rounded"},t[10]||(t[10]=[(0,s.Lk)("i",{class:"fa-solid fa-upload"},null,-1),(0,s.eW)(" Load")])),(0,s.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>y.showApiKeyModal&&y.showApiKeyModal(...e)),class:"bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-2 rounded"},t[11]||(t[11]=[(0,s.Lk)("i",{class:"fa-solid fa-key"},null,-1),(0,s.eW)(" Set API Key")]))])]),(0,s.bF)(k,{isVisible:b.isApiKeyModalVisible,onClose:y.closeApiKeyModal},null,8,["isVisible","onClose"]),(0,s.Lk)("main",d,[(0,s.bo)((0,s.Lk)("div",v,[(0,s.bF)(x,{onAddMovie:y.addMovie},null,8,["onAddMovie"])],512),[[o.aG,b.isFormVisible]]),(0,s.Lk)("div",u,[(0,s.Lk)("div",h,[t[13]||(t[13]=(0,s.Lk)("i",{class:"fas fa-sort text-white"},null,-1)),(0,s.bo)((0,s.Lk)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>b.sortOption=e),onChange:t[6]||(t[6]=(...e)=>y.sortMovies&&y.sortMovies(...e)),class:"p-2 bg-gray-800 text-white rounded-lg h-10"},t[12]||(t[12]=[(0,s.Fv)('<option value="alphabetical">Alphabetical (A-Z)</option><option value="year-asc">Year (Ascending)</option><option value="year-desc">Year (Descending)</option><option value="rating-asc">Rating (Ascending)</option><option value="rating-desc">Rating (Descending)</option><option value="genre">Genre</option>',6)]),544),[[o.u1,b.sortOption]])]),(0,s.Lk)("div",g,[t[14]||(t[14]=(0,s.Lk)("i",{class:"fas fa-search text-white"},null,-1)),(0,s.bF)(M,{onSearch:y.searchMovies,class:"w-full"},null,8,["onSearch"])])]),(0,s.Lk)("div",p,[(0,s.Lk)("div",m,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(b.filteredMovies,(e=>((0,s.uX)(),(0,s.Wv)(w,{key:e.id,movie:e,onRemoveMovie:y.removeMovie},null,8,["movie","onRemoveMovie"])))),128))])])])])}i(4114);const b={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},y={class:"bg-gray-800 p-6 rounded-lg shadow-lg z-60 max-w-md w-full outline outline-2 outline-cyan-500"},k={class:"flex justify-end space-x-4"};function x(e,t,i,a,r,n){return i.isVisible?((0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("div",y,[t[3]||(t[3]=(0,s.Lk)("h2",{class:"text-2xl text-white mb-4"},"Set OMDb API Key",-1)),t[4]||(t[4]=(0,s.Lk)("p",{class:"text-white text-sm mb-4"},[(0,s.eW)(" This site uses The Open Movie Database for fetching information about your movies. To get a FREE api key, head over to "),(0,s.Lk)("a",{href:"https://www.omdbapi.com",target:"_blank",class:"underline text-cyan-400"},"www.omdbapi.com"),(0,s.eW)(" and generate a FREE key to use! This will be saved to your local storage so you don't have to set it again. ")],-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.apiKey=e),type:"text",placeholder:"Enter your OMDb API key",class:"p-2 bg-gray-700 text-white w-full mb-4 rounded"},null,512),[[o.Jo,r.apiKey]]),(0,s.Lk)("div",k,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.saveApiKey&&n.saveApiKey(...e)),class:"bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded"},"Save"),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>n.closeModal&&n.closeModal(...e)),class:"bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"},"Cancel")])])])):(0,s.Q3)("",!0)}var M={props:["isVisible"],data(){return{apiKey:""}},mounted(){const e=localStorage.getItem("omdbApiKey");e&&(this.apiKey=e)},methods:{saveApiKey(){localStorage.setItem("omdbApiKey",this.apiKey),this.$emit("close")},closeModal(){this.$emit("close")}}},w=i(6262);const L=(0,w.A)(M,[["render",x]]);var A=L,S=i(33);const C={class:"flex space-x-4"},F={class:"flex-1"},I={key:0,class:"bg-gray-700 mt-2 p-2 rounded-lg"},O=["onClick"],K={class:"w-32"},R={class:"mt-4"};function E(e,t,i,a,r,n){return(0,s.uX)(),(0,s.CE)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>n.selectMovie&&n.selectMovie(...e)),["prevent"])),class:"flex flex-col bg-gray-900 p-6 rounded-lg font-sans"},[(0,s.Lk)("div",C,[(0,s.Lk)("div",F,[t[5]||(t[5]=(0,s.Lk)("label",{for:"movie",class:"text-base text-white-300"},"Movie Name:",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.movieSearch=e),type:"text",class:"p-2 rounded-lg bg-gray-800 text-white mt-2 w-full",onInput:t[1]||(t[1]=(...e)=>n.fetchMovieSuggestions&&n.fetchMovieSuggestions(...e)),placeholder:"Start typing a movie name..."},null,544),[[o.Jo,r.movieSearch]]),r.suggestions.length?((0,s.uX)(),(0,s.CE)("ul",I,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.suggestions,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.imdbID,onClick:t=>n.fetchMovieDetails(e.imdbID),class:"p-2 text-gray-300 cursor-pointer hover:bg-gray-600"},(0,S.v_)(e.Title)+" ("+(0,S.v_)(e.Year)+") ",9,O)))),128))])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",K,[t[6]||(t[6]=(0,s.Lk)("label",{for:"rating",class:"text-base text-white-300"},"Your Rating:",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.rating=e),type:"number",min:"0",max:"10",class:"p-2 rounded-lg bg-gray-800 text-white mt-2 w-full"},null,512),[[o.Jo,r.rating]])])]),(0,s.Lk)("div",R,[t[7]||(t[7]=(0,s.Lk)("label",{for:"notes",class:"text-base text-white-300"},"Your Review:",-1)),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.notes=e),class:"p-2 rounded-lg bg-gray-800 text-white mt-2 w-full"},null,512),[[o.Jo,r.notes]])]),t[8]||(t[8]=(0,s.Lk)("button",{type:"submit",class:"bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded mt-4"},"Add Movie",-1))],32)}var V={data(){return{movieSearch:"",suggestions:[],selectedMovie:null,rating:"",notes:""}},methods:{fetchMovieSuggestions(){const e=localStorage.getItem("omdbApiKey");e?this.movieSearch.length>2?fetch(`http://www.omdbapi.com/?s=${this.movieSearch}&apikey=${e}`).then((e=>e.json())).then((e=>{e.Search?this.suggestions=e.Search:this.suggestions=[]})).catch((e=>{console.error("Error fetching movie suggestions:",e)})):this.suggestions=[]:alert("Please set your OMDb API key.")},fetchMovieDetails(e){const t=localStorage.getItem("omdbApiKey");t?fetch(`http://www.omdbapi.com/?i=${e}&apikey=${t}`).then((e=>e.json())).then((e=>{this.selectedMovie=e,this.movieSearch=`${e.Title} (${e.Year})`,this.suggestions=[]})).catch((e=>{console.error("Error fetching movie details:",e)})):alert("Please set your OMDb API key.")},selectMovie(){this.selectedMovie&&(this.$emit("add-movie",{name:this.movieSearch,date:this.selectedMovie.Year,genre:this.selectedMovie.Genre,directedBy:this.selectedMovie.Director,starring:this.selectedMovie.Actors,poster:this.selectedMovie.Poster,imdbRating:this.selectedMovie.imdbRating,rating:this.rating,notes:this.notes}),this.clearForm())},clearForm(){this.movieSearch="",this.rating="",this.notes="",this.selectedMovie=null}}};const j=(0,w.A)(V,[["render",E]]);var D=j;function $(e,t,i,a,r,n){return(0,s.bo)(((0,s.uX)(),(0,s.CE)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e),onInput:t[1]||(t[1]=(...e)=>n.search&&n.search(...e)),type:"text",placeholder:"Search movies...",class:"p-2 bg-gray-800 text-white rounded-lg w-full"},null,544)),[[o.Jo,r.searchQuery]])}var P={data(){return{searchQuery:""}},methods:{search(){this.$emit("search",this.searchQuery)}}};const T=(0,w.A)(P,[["render",$]]);var W=T;const X={class:"relative bg-gray-800 text-gray-200 p-4 rounded-lg shadow-lg font-mono"},_=["src"],J={class:"text-xl font-bold font-sans text-center text-white"},Y={class:"text-gray-400 text-center"},U={class:"text-gray-400 mt-3"},Q={class:"text-gray-400"},N={class:"flex items-center mt-2"},B={class:"text-amber-400"},G={class:"ml-4 text-cyan-400"},z={class:"mt-2 text-gray-300"};function Z(e,t,i,o,a,r){return(0,s.uX)(),(0,s.CE)("div",X,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.confirmRemove&&r.confirmRemove(...e)),class:"absolute top-2 right-2 hover:bg-red-700 text-white p-1 rounded-full"},t[1]||(t[1]=[(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"h-6 w-6"},[(0,s.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])),(0,s.Lk)("img",{src:i.movie.poster,alt:"movie poster",class:"w-full h-64 object-contain rounded-md mb-4"},null,8,_),(0,s.Lk)("h3",J,(0,S.v_)(i.movie.name),1),(0,s.Lk)("p",Y,(0,S.v_)(i.movie.genre),1),(0,s.Lk)("p",U,[t[2]||(t[2]=(0,s.Lk)("strong",null,"Directed by:",-1)),(0,s.eW)(" "+(0,S.v_)(i.movie.directedBy),1)]),(0,s.Lk)("p",Q,[t[3]||(t[3]=(0,s.Lk)("strong",null,"Starring:",-1)),(0,s.eW)(" "+(0,S.v_)(i.movie.starring),1)]),(0,s.Lk)("div",N,[(0,s.Lk)("p",B,[t[4]||(t[4]=(0,s.Lk)("strong",null,"Your Rating:",-1)),(0,s.eW)(" "+(0,S.v_)(i.movie.rating)+"/10 ★",1)]),(0,s.Lk)("p",G,[t[5]||(t[5]=(0,s.Lk)("strong",null,"IMDb Rating:",-1)),(0,s.eW)(" "+(0,S.v_)(i.movie.imdbRating)+"/10 ☆",1)])]),(0,s.Lk)("p",z,'"'+(0,S.v_)(i.movie.notes)+'"',1)])}var q={props:["movie"],methods:{confirmRemove(){const e=confirm(`Are you sure you want to remove "${this.movie.name}"?`);e&&this.$emit("remove-movie",this.movie.id)}}};const H=(0,w.A)(q,[["render",Z]]);var ee=H,te={name:"App",components:{ApiKeyModal:A,MovieForm:D,SearchBar:W,MovieCard:ee},data(){return{isFormVisible:!1,isApiKeyModalVisible:!1,movies:[],filteredMovies:[],sortOption:"alphabetical"}},methods:{toggleForm(){this.isFormVisible=!this.isFormVisible},showApiKeyModal(){this.isApiKeyModalVisible=!0},closeApiKeyModal(){this.isApiKeyModalVisible=!1},addMovie(e){this.movies.push({...e,id:Date.now()}),this.filteredMovies=this.movies,this.saveMovies(),this.sortMovies()},removeMovie(e){this.movies=this.movies.filter((t=>t.id!==e)),this.filteredMovies=this.movies,this.saveMovies(),this.sortMovies()},searchMovies(e){this.filteredMovies=this.movies.filter((t=>t.name.toLowerCase().includes(e.toLowerCase())))},sortMovies(){"alphabetical"===this.sortOption?this.filteredMovies.sort(((e,t)=>e.name.localeCompare(t.name))):"year-asc"===this.sortOption?this.filteredMovies.sort(((e,t)=>parseInt(e.date)-parseInt(t.date))):"year-desc"===this.sortOption?this.filteredMovies.sort(((e,t)=>parseInt(t.date)-parseInt(e.date))):"rating-asc"===this.sortOption?this.filteredMovies.sort(((e,t)=>e.rating-t.rating)):"rating-desc"===this.sortOption?this.filteredMovies.sort(((e,t)=>t.rating-e.rating)):"genre"===this.sortOption&&this.filteredMovies.sort(((e,t)=>e.genre.localeCompare(t.genre)))},saveMovies(){localStorage.setItem("movies",JSON.stringify(this.movies))},loadMovies(){const e=JSON.parse(localStorage.getItem("movies"));e&&(this.movies=e,this.filteredMovies=e,this.sortMovies())},saveMoviesToFile(){const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.movies)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","RelevantRatings.json"),document.body.appendChild(t),t.click(),t.remove()},triggerFileInput(){this.$refs.fileInput.click()},loadMoviesFromFile(e){const t=e.target.files[0];if(!t)return;const i=new FileReader;i.onload=e=>{try{const t=JSON.parse(e.target.result);Array.isArray(t)&&this.validateMovies(t)?(this.movies=t,this.filteredMovies=t,this.saveMovies()):alert("Invalid file format. Please upload a valid movie list.")}catch(t){alert("Error reading the file. Please upload a valid movie list.")}},i.readAsText(t)},validateMovies(e){return e.every((e=>e.name&&e.date&&e.genre&&void 0!==e.rating))}},mounted(){this.loadMovies()}};const ie=(0,w.A)(te,[["render",f]]);var oe=ie;(0,o.Ef)(oe).mount("#app")}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,o,s,a){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],s=e[d][1],a=e[d][2];for(var n=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(n=!1,a<r&&(r=a));if(n){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,s,a]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/"}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,r=o[0],n=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(l)var d=l(i)}for(t&&t(o);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},o=self["webpackChunkRelevantRatings"]=self["webpackChunkRelevantRatings"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(653)}));o=i.O(o)})();
//# sourceMappingURL=app.ca5e4b70.js.map