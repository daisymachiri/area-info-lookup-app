import{A as H,B as W,Ba as ct,C as $,D as z,F as N,G as V,H as B,I as U,J as j,L,N as A,P as J,Q as G,R as K,f as M,g as O,i as I,j as r,k as F,l as k,m as C,ma as q,o as m,oa as R,p as i,pa as Q,q as e,qa as X,r as P,ra as Y,s as E,sa as Z,t as b,ta as tt,u as v,ua as et,v as o,va as nt,w as S,wa as it,x as f,xa as ot,y as T,ya as rt,z as D,za as at}from"./chunk-IVAAJGYL.js";import"./chunk-UPM3M7IO.js";import"./chunk-RWIKZ4EE.js";import"./chunk-O3KLBS3A.js";import"./chunk-BLLCJXK6.js";import"./chunk-HC6MZPB3.js";import"./chunk-4PGTP63H.js";import"./chunk-E2X2OLWF.js";import"./chunk-FERD25SW.js";import"./chunk-7EU7YSXT.js";import"./chunk-LEIMCQKJ.js";import"./chunk-Y5XL4IAA.js";import"./chunk-MCRJI3T3.js";import"./chunk-JEGRCOPK.js";import"./chunk-XO6XPINI.js";import"./chunk-D5QFP226.js";import"./chunk-LN54NTR4.js";import"./chunk-FQ42KCOL.js";import"./chunk-JWIEPCRG.js";import"./chunk-BLK62YZ3.js";import"./chunk-ZWIP3AYQ.js";import"./chunk-LF5XB4YN.js";import"./chunk-E2BOY3YE.js";import"./chunk-3SN3MQ6X.js";import"./chunk-DWGPMRVG.js";import"./chunk-BZ2JL7UE.js";import"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-RW4GY4BD.js";function lt(a,l){a&1&&(i(0,"div",13),P(1,"ion-icon",14),i(2,"p"),o(3,"No cities added yet. Add a city to your favorites!"),e()())}function dt(a,l){if(a&1){let t=E();i(0,"li",16),b("click",function(){let c=M(t).$implicit,s=v(2);return O(s.selectFavorite(c))}),o(1),i(2,"ion-button",17),b("click",function(){let c=M(t).$implicit,s=v(2);return O(s.removeFromFavorites(c))}),o(3,"Remove"),e()()}if(a&2){let t=l.$implicit;r(),f(" ",t," ")}}function pt(a,l){if(a&1&&(i(0,"ul"),C(1,dt,4,1,"li",15),e()),a&2){let t=v();r(),m("ngForOf",t.favorites)}}function mt(a,l){if(a&1&&P(0,"img",24),a&2){let t=v(2);m("src","https://openweathermap.org/img/wn/"+t.weather.weather[0].icon+"@2x.png",I)}}function gt(a,l){if(a&1){let t=E();i(0,"div",18)(1,"ion-card",19)(2,"ion-card-header")(3,"ion-card-title"),o(4),e(),i(5,"p"),o(6),e()(),i(7,"ion-card-content")(8,"p")(9,"strong"),o(10,"Temperature:"),e(),o(11),e(),i(12,"p")(13,"strong"),o(14,"Humidity:"),e(),o(15),e(),C(16,mt,1,1,"img",20),i(17,"p")(18,"strong"),o(19,"Condition:"),e(),o(20),e(),i(21,"p")(22,"strong"),o(23,"Wind Speed:"),e(),o(24),e(),i(25,"ion-button",21),b("click",function(){M(t);let c=v();return O(c.toggleFavorite())}),P(26,"i",22),i(27,"span",23),o(28),e()()()()()}if(a&2){let t=v();r(4),T("",t.weather.name," - ",t.weather.sys.country,""),r(2),S(t.getFormattedDate()),r(5),f(" ",t.weather.main.temp,"\xB0C"),r(4),f(" ",t.weather.main.humidity,"%"),r(),m("ngIf",t.weather==null||t.weather.weather==null||t.weather.weather[0]==null?null:t.weather.weather[0].icon),r(4),f(" ",t.weather.weather[0].description,""),r(4),f(" ",t.weather.wind.speed," m/s"),r(2),m("ngClass",t.isFavorite()?"favorite":"not-favorite"),r(),m("ngClass",t.isFavorite()?"favorite":"not-favorite"),r(),f(" ",t.isFavorite()?"Added to Favorite":"Add to Favorite"," ")}}function ft(a,l){if(a&1&&(i(0,"div",28)(1,"p")(2,"strong"),o(3),$(4,"date"),e()(),P(5,"img",29),i(6,"p"),o(7),e(),i(8,"p"),o(9),e(),i(10,"p"),o(11),e()()),a&2){let t=l.$implicit;r(3),S(z(4,5,t.date,"EEE")),r(2),m("src","https://openweathermap.org/img/wn/"+t.icon+"@2x.png",I),r(2),f("Temp: ",t.temp,"\xB0C"),r(2),f("Wind: ",t.wind," m/s"),r(2),f("Humidity: ",t.humidity,"%")}}function ht(a,l){if(a&1&&(i(0,"div",25)(1,"ion-card",19)(2,"ion-card-header")(3,"ion-card-title"),o(4,"5-Day Weather Projection"),e()(),i(5,"ion-card-content")(6,"div",26),C(7,ft,12,8,"div",27),e()()()()),a&2){let t=v();r(7),m("ngForOf",t.forecast)}}var Mt=(()=>{let l=class l{constructor(n){this.http=n,this.city="",this.weather=null,this.forecast=[],this.favorites=[]}ngOnInit(){this.city="Johannesburg",this.loadFavorites(),this.fetchWeather()}getFormattedDate(){let n=new Date,c={weekday:"long",day:"numeric",month:"long"};return n.toLocaleDateString("en-GB",c)}fetchWeather(){let n="e7f87037686596e39a1727865cd409b4",c=`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${n}&units=metric`,s=`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${n}&units=metric`;this.http.get(c).subscribe(p=>{this.weather=p},p=>{console.error("Error fetching weather data",p)}),this.http.get(s).subscribe(p=>{let g={};p.list.forEach(_=>{let x=new Date(_.dt_txt).toDateString();g[x]||(g[x]=[]),g[x].push(_)});let h=new Date().toDateString(),w=Object.keys(g).filter(_=>_!==h).slice(0,5);this.forecast=w.map(_=>{let x=g[_],d=x.find(u=>u.dt_txt.includes("12:00:00"))||x[0];return{date:new Date(d.dt_txt),temp:d.main.temp,wind:d.wind.speed,humidity:d.main.humidity,icon:d.weather[0].icon,description:d.weather[0].description}})},p=>{console.error("Error fetching forecast data",p)})}getCurrentLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{let c=n.coords.latitude,s=n.coords.longitude;this.fetchWeatherByCoordinates(c,s)},n=>{console.error("Error getting geolocation",n)}):console.log("Geolocation not supported.")}fetchWeatherByCoordinates(n,c){let s="e7f87037686596e39a1727865cd409b4",p=`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${c}&appid=${s}&units=metric`,g=`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${c}&appid=${s}&units=metric`;this.http.get(p).subscribe(h=>{this.weather=h,this.city=this.weather.name},h=>{console.error("Error fetching weather data",h)}),this.http.get(g).subscribe(h=>{let w={};h.list.forEach(d=>{let u=new Date(d.dt_txt).toDateString();w[u]||(w[u]=[]),w[u].push(d)});let _=new Date().toDateString(),x=Object.keys(w).filter(d=>d!==_).slice(0,5);this.forecast=x.map(d=>{let u=w[d],y=u.find(st=>st.dt_txt.includes("12:00:00"))||u[0];return{date:new Date(y.dt_txt),temp:y.main.temp,wind:y.wind.speed,humidity:y.main.humidity,icon:y.weather[0].icon,description:y.weather[0].description}})},h=>{console.error("Error fetching forecast data",h)})}toggleFavorite(){this.isFavorite()?this.removeFromFavorites(this.city):this.addToFavorites(this.city)}isFavorite(){return this.favorites.includes(this.city)}addToFavorites(n){this.favorites.push(n),this.saveFavorites()}removeFromFavorites(n){this.favorites=this.favorites.filter(c=>c!==n),this.saveFavorites()}saveFavorites(){localStorage.setItem("favorites",JSON.stringify(this.favorites))}loadFavorites(){let n=localStorage.getItem("favorites");n&&(this.favorites=JSON.parse(n))}selectFavorite(n){this.city=n,this.fetchWeather()}};l.\u0275fac=function(c){return new(c||l)(F(L))},l.\u0275cmp=k({type:l,selectors:[["app-home"]],decls:27,vars:5,consts:[[1,"page-wrapper"],[1,"content-wrapper"],[1,"input-section",2,"flex","1"],["position","floating",1,"city-name",2,"padding-bottom","20px"],[1,"input-field"],["placeholder","E.g., Johannesburg",3,"ngModelChange","ngModel"],["expand","block",1,"button-solid","no-shadow",3,"click"],[2,"text-align","center","margin-top","10px","color","white"],[1,"favorite-cities"],["class","no-favorites",4,"ngIf"],[4,"ngIf"],["style","flex: 1;",4,"ngIf"],["class","forecast-wrapper",4,"ngIf"],[1,"no-favorites"],["name","add-circle-outline",2,"font-size","32px"],["style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[2,"cursor","pointer",3,"click"],["fill","clear",2,"font-size","16px","color","red",3,"click"],[2,"flex","1"],[1,"custom-gradient-card"],["alt","Weather Icon","class","weather-icon",3,"src",4,"ngIf"],["fill","clear",1,"favorite-btn",3,"click"],[1,"fa-regular","fa-heart","heart-icon",3,"ngClass"],[1,"favorite-text",3,"ngClass"],["alt","Weather Icon",1,"weather-icon",3,"src"],[1,"forecast-wrapper"],[1,"forecast-grid"],["class","forecast-day",4,"ngFor","ngForOf"],[1,"forecast-day"],["alt","icon",1,"forecast-icon",3,"src"]],template:function(c,s){c&1&&(i(0,"div",0)(1,"ion-toolbar")(2,"ion-title"),o(3,"WEATHER LOOKUP"),e()(),i(4,"ion-content")(5,"div",1)(6,"div",2)(7,"ion-label",3),o(8,"Enter A City Name:"),e(),i(9,"ion-item",4)(10,"ion-input",5),W("ngModelChange",function(g){return H(s.city,g)||(s.city=g),g}),e()(),i(11,"ion-button",6),b("click",function(){return s.fetchWeather()}),o(12,"Get Weather"),e(),i(13,"div",7),o(14,"Or"),e(),i(15,"ion-button",6),b("click",function(){return s.getCurrentLocation()}),o(16,"Use Current Location"),e(),i(17,"div",8)(18,"ion-card")(19,"ion-card-header")(20,"ion-card-title"),o(21,"Favorite Cities"),e()(),i(22,"ion-card-content"),C(23,lt,4,0,"div",9)(24,pt,2,1,"ul",10),e()()()(),C(25,gt,29,11,"div",11),e(),C(26,ht,8,1,"div",12),e()()),c&2&&(r(10),D("ngModel",s.city),r(13),m("ngIf",s.favorites.length===0),r(),m("ngIf",s.favorites.length>0),r(),m("ngIf",s.weather),r(),m("ngIf",s.forecast.length>0))},dependencies:[j,N,V,B,U,K,J,G,A,ct,R,Q,X,Y,Z,tt,et,nt,it,ot,rt,at,q],styles:[".page-wrapper[_ngcontent-%COMP%]{background:#f9f9f9;min-height:100vh;display:flex;flex-direction:column;padding:1rem}@media (min-width: 768px){.page-wrapper[_ngcontent-%COMP%]{padding-left:200px;padding-right:200px}}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;padding:1rem}@media (min-width: 768px){.content-wrapper[_ngcontent-%COMP%]{flex-direction:row}}ion-toolbar[_ngcontent-%COMP%]{--background: #999cdb !important;--color: #fff !important;text-align:center!important}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-weight:600}ion-content[_ngcontent-%COMP%]{--padding-bottom: 20px;--background: #999cdb}.input-section[_ngcontent-%COMP%]{padding-top:20px}.city-name[_ngcontent-%COMP%]{color:#fff!important}.input-field[_ngcontent-%COMP%]{flex:1;margin-top:10px;height:40px}.input-field[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:14px;height:100%;--padding-top: 0px;--padding-bottom: 0px}ion-item[_ngcontent-%COMP%]{margin-bottom:16px;--background: #fff}.button-solid[_ngcontent-%COMP%]{--background: #999cdb;border:3px solid #f6bdbd}.no-shadow[_ngcontent-%COMP%]{--box-shadow: none !important;box-shadow:none!important}.favorite-btn[_ngcontent-%COMP%]{--width: 50px;--height: 50px;--background: transparent;padding:0;display:flex;justify-content:center;align-items:center}.favorite-btn[_ngcontent-%COMP%]   .favorite-text[_ngcontent-%COMP%]{font-size:16px;color:red;text-transform:none;transition:color .3s ease}.favorite-btn[_ngcontent-%COMP%]   .not-favorite-text[_ngcontent-%COMP%]{color:#000}.favorite-btn[_ngcontent-%COMP%]   .favorite-text.favorite[_ngcontent-%COMP%]{color:red}.favorite-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px;transition:color .3s ease}.favorite-btn[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]{color:red}.favorite-btn[_ngcontent-%COMP%]   .not-favorite[_ngcontent-%COMP%]{color:#000}.favorite-cities[_ngcontent-%COMP%]{margin-top:20px}.favorite-cities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.favorite-cities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #ddd}.favorite-cities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.favorite-cities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:14px;color:red;padding:0;margin:0;text-transform:none;font-weight:700;transition:color .3s ease}.favorite-cities[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{color:#8b0000}ion-card[_ngcontent-%COMP%]{background:linear-gradient(#999cdb,#f6bdbd);border-radius:16px;box-shadow:0 4px 12px #0000001a;margin-top:20px}ion-card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#fff}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0;font-size:16px;color:#333}.forecast-wrapper[_ngcontent-%COMP%]{margin:20px 0}.forecast-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px}.forecast-day[_ngcontent-%COMP%]{flex:1;min-width:110px;text-align:center;background:linear-gradient(#f6bdbd,#999cdb);border-radius:12px;padding:10px;box-shadow:0 2px 6px #0000001a}.forecast-icon[_ngcontent-%COMP%]{width:50px;height:50px}"]});let a=l;return a})();export{Mt as HomePage};
