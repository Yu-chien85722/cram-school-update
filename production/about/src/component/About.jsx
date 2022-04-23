import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div className="container border border-3">
                <header className="d-none">關於XX：沿革與教學理念</header>
                <article>
                    <h4 className="mt-4">沿革</h4>
                    <div>彰化【XX補習班】，於民國XX年初設立。
                        是彰化XX專辦國小考私中、考國中資優班，考高中資優班的補習班。</div>
                </article>
                <article>
                    <h4 className="mt-4">教學理念</h4>
                    <div className="mb-3">掌握XXXX、開創XXXX</div>
                </article>
            </div>
        );
    };
};
export default About;