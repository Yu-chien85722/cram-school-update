import Marquee from "react-fast-marquee";
import React from "react";
class Notify extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        let style={
            backgroundColor: "rgb(58, 117, 162)",
            color: "aliceblue",fontSize:"26px",fontFamily:"微軟正黑體"
        };
        return<>
            <div className="container-fluid">
                <Marquee pauseOnHover={true} gradientWidth={40} speed={60} style={style}>
                    恭喜林小美同學考入精誠中學數理資優班！！&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    小五『數學精英班』週六 9:00-12:00 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    小六『英文精英班』週六 14:00-17:00 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </Marquee>
            </div>
        </>
    };
}
export default Notify;