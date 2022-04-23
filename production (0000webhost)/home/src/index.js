// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap javascript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import bootstrap scss
import './scss/main.scss';

// import component in the homepage
import Navigation from './component/Navigation.jsx';
import Notify from './component/Notify.jsx';
import logo from './pic/logo.png';
import Env from './component/Env.jsx';
import TeaCard from './component/TeaCard.jsx';

// initial tooltip,popover,toasts
//import { initBootstrap } from './js/bootstrap.js';

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
  return (
    <div className="container-fluid mt-4 mb-4
        d-flex align-items-end justify-content-start"
    >
      <a href="https://cram-school-work.000webhostapp.com">
        <img src={logo} alt="新生文理補習班" width="100px" />
      </a>
      <h1 className="text-primary">
        彰化XX文理補習班
      </h1>
    </div>
  );
}

const teachers = [
  {
    name: '茱X老師',
    graduate: '英國多倫多大學',
    subject: '英文',
    pic: 'https://www.neautotime.com/uploads/43d61f15000e397f2e8ceb839fb8ef5d.jpg',
  },
  {
    name: '黃XX老師',
    graduate: '國立彰化師範大學',
    subject: '數學',
    pic: 'https://www.neautotime.com/uploads/43d61f15000e397f2e8ceb839fb8ef5d.jpg',
  },
  {
    name: '李X老師',
    graduate: '國立高雄師範大學',
    subject: '自然',
    pic: 'https://www.neautotime.com/uploads/43d61f15000e397f2e8ceb839fb8ef5d.jpg',
  },
];
const navItems = [
  { name: '首頁', href: 'https://cram-school-work.000webhostapp.com', active: true },
  { name: '關於XX', href: 'https://cram-school-work.000webhostapp.com/about.html', active: false },
  { name: '課程介紹', href: 'https://cram-school-work.000webhostapp.com/course.html', active: false },
  { name: '升學資訊', href: 'https://cram-school-work.000webhostapp.com/info.html', active: false },
  { name: '相關連結', href: 'https://cram-school-work.000webhostapp.com/link.html', active: false },
];

function TeaInfo({ teachers }) {
  const teaCardArray = teachers.map((teacher) => (
    <TeaCard
      key={teacher.name}
      src={teacher.pic}
      teacherName={teacher.name}
      graduate={teacher.graduate}
      subject={teacher.subject}
    />
  ));
  return (
    <div className="container border border-3">
      <header><h3 className="mt-3 mb-3">師資介紹</h3></header>
      <div className="d-flex justify-content-around">
        {teaCardArray}
      </div>
    </div>
  );
}

ReactDOM.render(<Title />, document.getElementById('header'));
ReactDOM.render(<Navigation navItems={navItems} />, document.getElementById('nav'));
ReactDOM.render(<Notify />, document.getElementById('marquee'));
ReactDOM.render(<Env />, document.getElementById('env'));
ReactDOM.render(<TeaInfo teachers={teachers} />, document.getElementById('teacher-card'));
ReactDOM.render(
  <div className="container mt-3 pb-2">
    Copyright&#169;2022&thinsp;kelly&ensp;Wang&thinsp;All&ensp;rights&ensp;reserved.<br />
    補習班地址：500 彰化縣彰化市和平路XX號XF&emsp;聯絡電話：04-729-XXXX&ensp;|&ensp;
    Photo edited with <a href="https://www.fotojet.com/tw/">FotoJet</a>
  </div>,
  document.getElementById('connect'),
);
/*initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});*/
