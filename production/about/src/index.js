// import react
import React from "react";
import ReactDOM from "react-dom";

// import bootstrap javascript
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import bootstrap scss
import "./scss/main.scss";

// import component in the homepage
import Navigation from "./component/Navigation.jsx";
import Notify from "./component/Notify.jsx";
//import logo from "./pic/logo.png";
import About from "./component/About.jsx";
import ConnectUs from "./component/ConnectUs.jsx";

// service-worker 離線也可造訪網站
if('serviceWorker' in navigator) {
    window.addEventListener('load',() => {
      navigator.serviceWorker.register('service-worker.js')
      .then(() => {
        console.log('service-worker 啟動成功了～')
      })
      .catch(() => {
        console.log('service-worker 啟動失敗了～')
      })
    })
}


// The component in homepage
function Title() {
    return(
        <div className="container-fluid mt-4 mb-4 
        d-flex align-items-end justify-content-start">
            <a href="http://127.0.0.1:3000/home.html">
                <img src="http://www.newstudent.url.tw/images/corpimg.png" alt="新生文理補習班" width="100px" />
            </a>
            <h1 className="text-primary">
                彰化XX文理補習班
            </h1>
        </div>
    );
}
const navItems = [
    {name:"首頁", href:"http://127.0.0.1:3000/home.html", active:false},
    {name:"關於XX", href:"http://127.0.0.1:3000/about.html", active:true},
    {name:"課程介紹", href:"http://127.0.0.1:3000/course.html", active:false},
    {name:"升學資訊", href:"http://127.0.0.1:3000/info.html", active:false},
    {name:"相關連結", href:"http://127.0.0.1:3000/link.html", active:false}
];

ReactDOM.render(<Title />,document.getElementById('header'));
ReactDOM.render(<Notify />,document.getElementById('marquee'));
ReactDOM.render(<Navigation navItems={navItems}/>,document.getElementById('nav'));
ReactDOM.render(<About />,document.getElementById('about'));
ReactDOM.render(<ConnectUs />,document.getElementById('connect-us'));
ReactDOM.render(<div className="container mt-3 pb-2">
    Copyright&#169;2022&thinsp;kelly&ensp;Wang&thinsp;All&ensp;rights&ensp;reserved.<br />
    補習班地址：500 彰化縣彰化市和平路XX號XF&emsp;聯絡電話：04-729-XXXX
    </div>,
document.getElementById("connect"));

// initial tooltip,popover,toasts
/*import {initBootstrap} from "./js/bootstrap.js";
initBootstrap({
    tooltip:true,
    popover:true,
    toasts:true
});*/



