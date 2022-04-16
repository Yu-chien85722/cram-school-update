import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="container border border-3">
                <header className="d-none">關於新生：沿革與教學理念</header>
                <article>
                    <h4 className="mt-4">沿革</h4>
                    <div>彰化【新生補習班】，於民國89年初設立。
                        是彰化第一家專辦國小考私中、考國中資優班，考高中資優班的補習班。</div>
                </article>
                <article>
                    <h4 className="mt-4">教學理念</h4>
                    <div className="mb-3">掌握關鍵學習、開創無限未來</div>
                </article>
            </div>
        );
    };
};
export default About;