(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/spinner.706c7930.gif"},43:function(e,t,a){e.exports=a(75)},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=a(9),o=a(14),u=a(1),s=a(10),m=a.n(s),p=a(17),d=a(15),E=a.n(d),h=Object(u.b)(function(e){return{weather:e.weather}},{switchLang:function(e){return{type:"SWITCH_LANG",payload:e}},switchUnits:function(e){return{type:"SWITCH_UNITS",payload:e}}})(function(e){var t=e.weather,a=t.units,n=t.lang,c=e.switchLang,l=e.switchUnits;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-cloud-sun-rain"})," Weather app"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/weather-app-redux"},"en"===n?"Search":"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/weather-app-redux/about"},"en"===n?"About":"\u0418\u043d\u0444\u043e")),r.a.createElement("li",null,r.a.createElement("div",{className:"switch"},r.a.createElement("div",{className:"select"},"metric"===a?"\xb0C":"\xb0F",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("ul",{className:"select-drop"},r.a.createElement("li",{onClick:function(){return l(a)}},"metric"===a?"\xb0F":"\xb0C")))),r.a.createElement("li",null,r.a.createElement("div",{className:"switch"},r.a.createElement("div",{className:"select"},"en"===n?"EN":"RU",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("ul",{className:"select-drop"},r.a.createElement("li",{onClick:function(){return c(n)}},"en"===n?"RU":"EN"))))))}),f=Object(u.b)(function(e){return{weather:e.weather}})(function(e){var t=e.weather.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-dark text-center"},r.a.createElement("i",{className:"fas fa-info-circle"})," ",t)}),w=a(12),b=Object(u.b)(function(e){return{weather:e.weather}},{searchPlaces:function(e,t){return function(){var a=Object(p.a)(m.a.mark(function a(n){var r,c;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"SET_LOADING"}),r={headers:{"x-rapidapi-host":"wft-geo-db.p.rapidapi.com","x-rapidapi-key":"d18fb22e26msh6173b50175c5c28p16d77ejsnc0cd70881577"}},a.next=4,E.a.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=".concat(e,"&sort=-population&languageCode=").concat(t),r);case 4:0===(c=a.sent).data.data.length?(n({type:"SET_ALERT",payload:"en"===t?"No cities found. Check the spelling and try again":"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"}),setTimeout(function(){return n({type:"REMOVE_ALERT"})},5e3)):(console.log(c.data),n({type:"SEARCH_PLACES",payload:c.data.data}));case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},clearSearch:function(){return{type:"CLEAR_SEARCH"}},setAlert:function(e){return function(t){t({type:"SET_ALERT",payload:{msg:e}}),setTimeout(function(){return t({type:"REMOVE_ALERT"})},3e3)}}})(function(e){var t=e.weather,a=t.lang,c=t.places,l=e.history,i=e.location,o=e.searchPlaces,u=e.clearSearch,s=e.setAlert,m=Object(n.useState)(""),p=Object(w.a)(m,2),d=p[0],E=p[1];Object(n.useEffect)(function(){l.push("/weather-app-redux")},[c]);return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===d?s("en"===a?"Please enter something":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c"):(o(d,a),E(""))},className:"form"},r.a.createElement("input",{type:"text",name:"text",value:d,placeholder:"en"===a?"Enter City Name...":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435...",onChange:function(e){return E(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"en"===a?"Search":"\u041f\u043e\u0438\u0441\u043a",className:"btn btn-dark btn-block"})),c.length>0&&"/weather-app-redux"===i.pathname&&r.a.createElement("button",{className:"btn btn-grey btn-block my-1",onClick:u},"en"===a?"Clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))}),g=a(16),y=a.n(g),x=Object(u.b)(function(e){return{weather:e.weather}},null)(function(e){var t=e.weather,a=t.current,c=t.lang,l=t.units,i=e.day,o=i.ts,u=i.max_temp,s=i.min_temp,m=i.wind_spd,p=i.pop,d=i.pres,E=i.rh,h=i.weather,f=o+a.offset;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"weatheritem"},r.a.createElement("h3",null,r.a.createElement(y.a,{locale:c,unix:!0,format:"ddd Do"},f)),r.a.createElement("img",{alt:h.description,src:"https://www.weatherbit.io/static/img/icons/".concat(h.icon,".png"),style:{width:"70px"}}),r.a.createElement("h2",null,u.toFixed(),"\xb0/",s.toFixed(),"\xb0"),r.a.createElement("div",{className:"conditions"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-umbrella"}),p,"%"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-water"}),E,"%"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-wind"}),m.toFixed(1),"en"===c?"metric"===l?"m/s":"mph":"metric"===l?"\u043c/c":"\u043c/\u0447"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-square"}),d.toFixed(),"en"===c?"mb":"\u043c\u0431"))))))}),v=a(40),O=a.n(v),N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:O.a,alt:"Loading...",style:{width:"64px",margin:"auto",display:"block"}}))},j=Object(u.b)(function(e){return{weather:e.weather}},null)(function(e){var t=e.weather,a=t.forecast15;return t.loading?r.a.createElement(N,null):r.a.createElement("div",{className:"listitems"},a.map(function(e){return r.a.createElement(x,{key:e.ts,day:e})}))}),T=Object(u.b)(function(e){return{weather:e.weather}},null)(function(e){var t=e.weather,a=t.current,n=t.lang,c=e.period,l=c.dt,i=c.main,o=c.weather,u=l+a.offset;return r.a.createElement("div",{className:"weatheritem"},r.a.createElement("h3",null,r.a.createElement(y.a,{locale:n,unix:!0,format:"ddd LT"},u)),r.a.createElement("img",{alt:o[0].description,src:"https://openweathermap.org/img/wn/".concat(o[0].icon,"@2x.png"),style:{width:"100px"}}),r.a.createElement("h1",null,i.temp.toFixed(),"\xb0"))}),A=Object(u.b)(function(e){return{weather:e.weather}},null)(function(e){var t=e.weather,a=t.forecastToday;return t.loading?r.a.createElement(N,null):r.a.createElement("div",{className:"listitems"},a.map(function(e){return r.a.createElement(T,{key:e.dt,period:e})}))}),_=Object(u.b)(function(e){return{weather:e.weather}},{getWeather:function(e,t){return function(){var a=Object(p.a)(m.a.mark(function a(n){var r,c,l,i,o,u,s,d,h,f,w,b,g,y,x,v,O,N,j,T,A,_,S;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"SET_LOADING"}),r=e.city,c=e.latitude,l=e.longitude,a.next=4,E.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(l,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 4:return i=a.sent,o=i.data,u=o.timezone,s=o.dt,d=o.main,h=o.wind,f=o.weather,w=o.sys,b=d.temp,g=d.pressure,y=d.humidity,x=w.sunrise,v=w.sunset,O=60*(new Date).getTimezoneOffset()+u,"-0"===(N={name:r,dt:s,temp:b,wind:h.speed,pressure:g,humidity:y,weather:f[0].main,sky:f[0].description,icon:f[0].icon,offset:O}).temp.toFixed()&&(N.temp=0),n({type:"GET_CURRENT_WEATHER",payload:N}),a.next=12,E.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(c,"&lon=").concat(l,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 12:return j=a.sent,(T=j.data.list.slice(0,16)).map(function(e){return"-0"===e.main.temp.toFixed()&&(e.main.temp=0),x+86400<e.dt&&e.dt<v+86400?e.weather[0].icon=e.weather[0].icon.slice(0,-1)+"d":v<e.dt&&e.dt<x+86400?e.weather[0].icon=e.weather[0].icon.slice(0,-1)+"n":x<e.dt&&e.dt<v?e.weather[0].icon=e.weather[0].icon.slice(0,-1)+"d":v-86400<e.dt&&e.dt<x&&(e.weather[0].icon=e.weather[0].icon.slice(0,-1)+"n"),e}),n({type:"GET_TODAY_WEATHER",payload:T}),A="metric"===t?"M":"I",a.next=19,E.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(c,"&lon=").concat(l,"&units=").concat(A,"&key=").concat("b14e2486633e40cfa189b684c35373f7"));case 19:_=a.sent,(S=_.data.data.slice(1,16)).map(function(){var e=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"-0"===t.max_temp.toFixed()&&(t.max_temp=0),"-0"===t.min_temp.toFixed()&&(t.min_temp=0),e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n({type:"GET_FORECAST",payload:S});case 23:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){var t=e.weather,a=t.current,c=t.forecastToday,l=t.forecast15,u=t.loading,s=t.units,m=t.lang,p=t.place,d=e.getWeather,E=Object(n.useState)(""),h=Object(w.a)(E,2),f=h[0],b=h[1],g=Object(n.useState)(""),x=Object(w.a)(g,2),v=x[0],O=x[1];Object(n.useEffect)(function(){"en"===m?(b("15-day forecast"),O("15-day")):(b("\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439"),O("15-day"))},[]),Object(n.useEffect)(function(){T()},[m,v]),Object(n.useEffect)(function(){d(p,s)},[s]);var T=function(){b("15-day"===v?"en"===m?"15-day forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439":"en"===m?"48-hr forecast":"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 48 \u0447\u0430\u0441\u043e\u0432")},_=a.name,S=a.dt,C=a.weather,k=a.sky,F=a.wind,R=a.temp,L=a.pressure,P=a.humidity,I=a.icon,H=S+a.offset;return u||0===c.length?r.a.createElement(N,null):r.a.createElement(i.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{alt:k,src:"https://openweathermap.org/img/wn/".concat(I,"@2x.png"),style:{width:"150px"}})),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("h1",null,R.toFixed(),"\xb0"),r.a.createElement("h3",null,l[0].max_temp.toFixed(),"\xb0/",l[0].min_temp.toFixed(),"\xb0"),r.a.createElement("h2",null,_),r.a.createElement("h4",null,r.a.createElement(y.a,{locale:m,unix:!0,format:"LT"},H)))),r.a.createElement("div",{style:{margin:"auto 0"}},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"en"===m?C:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f:")),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-water"})," ","en"===m?"Humidity: ":"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",P,"%"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-wind"})," ","en"===m?"Wind: ":"\u0412\u0435\u0442\u0435\u0440: ",F.toFixed(1)," ","en"===m?"metric"===s?"m/s":"mph":"metric"===s?"\u043c/c":"\u043c/\u0447"),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-square"})," ","en"===m?"Pressure: ":"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",L.toFixed()," ","en"===m?"mbar":"\u043c\u0431\u0430\u0440")),r.a.createElement(i.b,{to:"/weather-app-redux/".concat(v,"/").concat(_),className:"btn btn-dark btn-sm my-1",onClick:function(){return function(e){O("15-day"===e?"current":"15-day")}(v)}},f))),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/weather-app-redux/current/:name",component:A}),r.a.createElement(o.a,{exact:!0,path:"/weather-app-redux/15-day/:name",component:j}))))}),S=Object(u.b)(function(e){return{weather:e.weather}},{selectPlace:function(e){return{type:"SELECT_PLACE",payload:e}}})(function(e){var t=e.weather.units,a=e.selectPlace,c=e.place,l=Object(n.useState)(""),o=Object(w.a)(l,2),u=o[0],s=o[1],d=Object(n.useState)(""),h=Object(w.a)(d,2),f=h[0],b=h[1],g=Object(n.useState)(""),y=Object(w.a)(g,2),x=y[0],v=y[1];Object(n.useEffect)(function(){O()},[t]);var O=function(){var e=Object(p.a)(m.a.mark(function e(){var a,n,r,l,i,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.latitude,n=c.longitude,e.next=3,E.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&units=").concat(t,"&APPID=").concat("9dc5f93120e9ec0a6c67c21372c9f72b"));case 3:r=e.sent,l=r.data,i=l.main,o=l.weather,"-0"===i.temp.toFixed()&&(i.temp=0),s(i.temp.toFixed()),b(o[0].description),v(o[0].icon);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),N=c.city,j=c.regionCode,T=c.country;return r.a.createElement(i.b,{to:"/weather-app-redux/current/".concat(N),onClick:function(){return a(c)}},r.a.createElement("div",{className:"placeitem"},r.a.createElement("h1",null,u,"\xb0"),r.a.createElement("img",{alt:f,src:"https://openweathermap.org/img/wn/".concat(x,"@2x.png"),style:{width:"100px"}}),r.a.createElement("div",{className:"all-center"},r.a.createElement("h3",null,N,", ",j),r.a.createElement("h4",null,T))))}),C=Object(u.b)(function(e){return{weather:e.weather}},null)(function(e){var t=e.weather,a=t.places;return t.loading?r.a.createElement(N,null):r.a.createElement("div",{className:"listitems"},a.map(function(e){return r.a.createElement(S,{key:e.id,place:e})}))}),k=Object(u.b)(function(e){return{weather:e.weather}})(function(e){return"en"===e.weather.lang?r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"About this app"),r.a.createElement("p",null,"An application for searching weather in more than 134,000 cities in the world."),r.a.createElement("p",null,"Provides information on current weather, as well as a detailed forecast for the next 48 hours and a forecast for 15 days."),r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://github.com/yalalex/"},"Aliaksandr Yalouskikh"),".")):r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"\u041e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),r.a.createElement("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 134 000 \u0433\u043e\u0440\u043e\u0434\u0430\u0445 \u043c\u0438\u0440\u0430."),r.a.createElement("p",null,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u043e\u0433\u043e\u0434\u0435, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 48 \u0447\u0430\u0441\u043e\u0432 \u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 15 \u0434\u043d\u0435\u0439."),r.a.createElement("p",null,"\u0421\u0434\u0435\u043b\u0430\u043b ",r.a.createElement("a",{href:"https://github.com/yalalex/"},"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0415\u043b\u043e\u0432\u0441\u043a\u0438\u0445"),"."))}),F=Object(u.b)(function(e){return{weather:e.weather}})(function(e){return"en"===e.weather.lang?r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Not Found"),r.a.createElement("p",{className:"lead"},"The page you are looking for does not exist...")):r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),r.a.createElement("p",{className:"lead"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0438\u0449\u0435\u0442\u0435, \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442..."))}),R=(a(73),a(13)),L=a(41),P=a(42),I=a(7),H={units:"metric",lang:"en",loading:!1,alert:null,places:[],place:null,current:{},forecastToday:[],forecast15:[]},W=Object(R.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_PLACES":return Object(I.a)({},e,{places:t.payload,loading:!1});case"CLEAR_SEARCH":return Object(I.a)({},e,{places:[]});case"SELECT_PLACE":return Object(I.a)({},e,{place:t.payload});case"GET_CURRENT_WEATHER":return Object(I.a)({},e,{current:t.payload});case"GET_TODAY_WEATHER":return Object(I.a)({},e,{forecastToday:t.payload});case"GET_FORECAST":return Object(I.a)({},e,{forecast15:t.payload,loading:!1});case"SWITCH_LANG":return Object(I.a)({},e,{lang:"en"===t.payload?"ru":"en"});case"SWITCH_UNITS":return Object(I.a)({},e,{units:"metric"===t.payload?"imperial":"metric"});case"SET_ALERT":return Object(I.a)({},e,{alert:t.payload});case"REMOVE_ALERT":return Object(I.a)({},e,{alert:null,loading:!1});case"SET_LOADING":return Object(I.a)({},e,{loading:!0});default:return e}}}),D=[P.a],G=Object(R.createStore)(W,{},Object(L.composeWithDevTools)(R.applyMiddleware.apply(void 0,D))),U=function(){return r.a.createElement(u.a,{store:G},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(o.a,{path:"/weather-app-redux",component:b}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/weather-app-redux",component:C}),r.a.createElement(o.a,{exact:!0,path:"/weather-app-redux/current/:name",component:_}),r.a.createElement(o.a,{exact:!0,path:"/weather-app-redux/about",component:k}),r.a.createElement(o.a,{component:F}))))))};a(74);l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c92792d8.chunk.js.map