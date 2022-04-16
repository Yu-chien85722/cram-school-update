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
import Env from "./component/Env.jsx";
import TeaCard from "./component/TeaCard.jsx";

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

const teachers = [
    {name: "茱蒂老師", graduate: "英國多倫多大學", subject: "英文", 
    pic:"http://pic.616pic.com/ys_bnew_img/00/17/08/AD5Tu6hR1g.jpg"},
    {name: "黃志雄老師", graduate: "國立彰化師範大學", subject: "數學", 
    pic:"https://www.neautotime.com/uploads/43d61f15000e397f2e8ceb839fb8ef5d.jpg"},
    {name: "李霖老師", graduate: "國立高雄師範大學", subject: "自然", 
    pic:"https://www.neautotime.com/uploads/43d61f15000e397f2e8ceb839fb8ef5d.jpg"}
];
const navItems = [
    {name:"首頁", href:"http://127.0.0.1:3000/home-dist/index.html", active:true},
    {name:"關於新生", href:"http://127.0.0.1:3000/about-dist/index.html", active:false},
    {name:"課程介紹", href:"http://127.0.0.1:3000/course-dist/index.html", active:false},
    {name:"升學資訊", href:"http://127.0.0.1:3000/info-dist/index.html", active:false},
    {name:"相關連結", href:"http://127.0.0.1:3000/link-dist/index.html", active:false}
];

function TeaInfo(props) {
    const teachersArray = props.teachers;
    const teaCardArray =teachersArray.map((teacher) => (
        <TeaCard key={teacher.name} src={teacher.pic} teacherName={teacher.name} 
        graduate={teacher.graduate} subject={teacher.subject} />
    ))
    return(
        <div className="container border border-3">
            <header><h3 className="mt-3 mb-3">師資介紹</h3></header>
            <div className="d-flex justify-content-around">
                {teaCardArray}
            </div>
        </div>
    );
}


ReactDOM.render(<Title />,document.getElementById('header'));
ReactDOM.render(<Navigation navItems={navItems}/>,document.getElementById('nav'));
ReactDOM.render(<Notify />,document.getElementById('marquee'));
ReactDOM.render(<Env />,document.getElementById('env'));
ReactDOM.render(<TeaInfo teachers={teachers} />,document.getElementById('teacher-card'));
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



