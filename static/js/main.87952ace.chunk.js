(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{15:function(e,t,a){e.exports=a(42)},20:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(13),r=a.n(l),s=(a(20),a(21),a(2)),d=a(14),m=a.n(d),o=(a(38),function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(),d=Object(s.a)(r,2),o=d[0],i=d[1];Object(c.useEffect)((function(){m.a.get("https://api.covid19india.org/data.json").then((function(e){console.log(e),l(e.data.cases_time_series),i(e.data.statewise)})).then((function(e){console.error(e)}))}),[]),Object(c.useEffect)((function(){a&&a.map((function(e){E.push({x:e.date,y:e.dailyconfirmed})}))}),[a]);var E=[];return n.a.createElement("div",{className:"container-fluid APP"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10 offset-md-1"},n.a.createElement("h1",{className:"display-4 text-center mt-3 mb-5"}," ","Covid-19 Tracker India"," "),n.a.createElement("div",{className:"cardStack"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h1",{className:" text-center text-danger  "},"Total cases"),n.a.createElement("h1",{className:"display-5 text-center text-danger  "},a&&a[a.length-1].totalconfirmed))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h1",{className:" text-center text-danger  "},"Total Recovered"),n.a.createElement("h1",{className:"display-5 text-center text-danger  "},a&&a[a.length-1].totalrecovered))),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h1",{className:" text-center text-danger  "},"Total Deceased"),n.a.createElement("h1",{className:"display-5 text-center text-danger  "},a&&a[a.length-1].totaldeceased)))),n.a.createElement("table",{className:"table table-dark m-5"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"State"),n.a.createElement("th",{scope:"col"},"Confirmed"),n.a.createElement("th",{scope:"col"},"Active"),n.a.createElement("th",{scope:"col"},"Death"),n.a.createElement("th",{scope:"col"},"Recovered"))),n.a.createElement("tbody",null,o&&o.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{scope:"row"},t+1),n.a.createElement("td",null,e.state),n.a.createElement("td",null,e.confirmed),n.a.createElement("td",null,e.active),n.a.createElement("td",null,e.deaths),n.a.createElement("td",null,e.recovered))})))))))});r.a.render(n.a.createElement(o,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.87952ace.chunk.js.map