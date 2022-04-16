import React from "react";

export default class ConnectUs extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return<>
            <div className="container mt-3 border border-3">
                <header className="h3 mt-4">聯絡資訊</header>
                <div>
                    聯絡電話：04-729-9090 <br/>
                    地址：500 彰化縣彰化市和平路48號5F<a href="https://goo.gl/maps/ckXAYqHausxhbDFc7" target="_blank">  (顯示完整Google map)</a>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.6155083646095!2d120.53854694992478!3d24.07984088195299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469389092917b1d%3A0x3e16579311434d90!2z56eB56uL5paw55Sf5paH55CG55-t5pyf6KOc57-S54-t!5e0!3m2!1sen!2stw!4v1649906136074!5m2!1sen!2stw"
                style={{border:0,width:"100%",height:400}} className="mt-3 mb-3" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div>
                    如何到達：<br/>
                    1.公車：彰化客運總站，步行大約3分鐘。<br/>
                    2.火車：火車 → 彰化火車站（前站)，步行大約5分鐘。
                </div>
            </div>
        </>
    };
};