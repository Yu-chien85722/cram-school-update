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
import CourseSearch from "./component/CourseSearch.jsx";
import CourseList from "./component/CourseList.jsx";


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
    {name:"課程介紹", href:"http://127.0.0.1:3000/course-dist/index.html", active:true},
    {name:"升學資訊", href:"http://127.0.0.1:3000/info-dist/index.html", active:false},
    {name:"相關連結", href:"http://127.0.0.1:3000/link-dist/index.html", active:false}
];

const course = [
    {series:"小五『考私中』特訓", course:"數學菁英班", time:"週（六）上午 9:00~12:00"},
    {series:"小五『考私中』特訓", course:"自然＋國語文班", time:"週（六）下午 1:30~5:00"},
    {series:"國一先修", course:"英文", time:"週（六）上午 9:00~12:00"},
    {series:"國一先修", course:"數學", time:"週（六）下午 1:30~4:30"},
    {series:"國一課程", course:"英文（含聽力）（茱蒂 老師）", time:"週（日）上午 9:00~12:00"},
    {series:"國一課程", course:"數學資優班（黃志雄 老師）", time:"週（五）晚上 6:00~9:00"},
    {series:"國一課程", course:"數學菁英班（黃志雄 老師）", time:"週（六）晚上 6:00~9:00"},
    {series:"國一課程", course:"自然資優班（李霖 老師）", time:"週（日）下午 1:30~4:30"},
    {series:"國二課程", course:"自然（李霖 老師）", time:"週（五）晚上 6:00~9:00"},
    {series:"國二課程", course:"數學菁英班（黃志雄 老師）", time:"週（日）上午 9:00~12:00"},
    {series:"國三 總複習 課程", course:"英文（茱蒂 老師）", time:"週（三）晚上 6:00~9:00"},
    {series:"國三 總複習 課程", course:"數學（黃志雄 老師）", time:"週（日）下午 1:30~4:30"},
    {series:"國三 總複習 課程", course:"自然（李霖 老師）", time:"週（日）上午 9:00~12:00"}
];


ReactDOM.render(<Title />,document.getElementById('header'));
ReactDOM.render(<Navigation navItems={navItems}/>,document.getElementById('nav'));
ReactDOM.render(<Notify />,document.getElementById('marquee'));
ReactDOM.render(<CourseSearch course={course} />,document.getElementById('course-search'));
ReactDOM.render(<CourseList course={course} />,document.getElementById('course-download'));
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



