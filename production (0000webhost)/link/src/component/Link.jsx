import React from "react";
export default class Link extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="container border border-3 h-100">
                <h3 className="pt-3">相關連結</h3>
                <ul className="h5">
                    <li className="p-1">
                        <a href="https://cap.rcpet.edu.tw/" target="_blank">國中教育會考網站</a>
                    </li>
                    <li className="p-1">
                        <a href="https://forms.gle/twwcMUbP5ErFcv5KA" target="_blank">線上報名連結</a>
                    </li>
                </ul>
            </div>
        );
    }
}