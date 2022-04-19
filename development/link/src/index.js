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
import logo from "./pic/logo.png";
import Link from "./component/Link.jsx";

// The component in homepage
function Title() {
    return(
        <div className="container-fluid mt-4 mb-4 
        d-flex align-items-end justify-content-start">
            <a href="#">
                <img src={logo} alt="新生文理補習班" width="100px" />
            </a>
            <h1 className="text-primary">
                彰化新生文理補習班
            </h1>
        </div>
    );
}

const navItems = [
    {name:"首頁", href:"http://127.0.0.1:3000/home-dist/index.html", active:false},
    {name:"關於新生", href:"http://127.0.0.1:3000/about-dist/index.html", active:false},
    {name:"課程介紹", href:"http://127.0.0.1:3000/course-dist/index.html", active:false},
    {name:"升學資訊", href:"http://127.0.0.1:3000/info-dist/index.html", active:false},
    {name:"相關連結", href:"http://127.0.0.1:3000/link-dist/index.html", active:true}
];



ReactDOM.render(<Title />,document.getElementById('header'));
ReactDOM.render(<Navigation navItems={navItems}/>,document.getElementById('nav'));
ReactDOM.render(<Notify />,document.getElementById('marquee'));
ReactDOM.render(<Link />,document.getElementById('link'));
ReactDOM.render(<div className="container-fluid mt-3 pb-2 text-center">地址：500 
彰化縣彰化市和平路48號5F&emsp;&emsp;聯絡電話：04-729-9090</div>,
document.getElementById("connect"));

// initial tooltip,popover,toasts
import {initBootstrap} from "./js/bootstrap.js";
initBootstrap({
    tooltip:true,
    popover:true,
    toasts:true
});



