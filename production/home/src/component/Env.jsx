import React from "react";
import outlook1 from "../pic/outlook1.png";
import outlook2 from "../pic/outlook2.png";
import outlook3 from "../pic/outlook3.png";
export default function Env(props) {
    return(
        <div className="container h-25">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        
                <div className="carousel-indicators">
                    <button type="button" className="active" data-bs-target="#carousel" data-bs-slide-to="0"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={outlook1} alt="外觀大樓" className="d-block" width="100%"/>
                        <div className="carousel-caption">
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={outlook2} alt="大樓指標" className="d-block" width="100%"/>
                        <div className="carousel-caption">
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={outlook3} alt="內部環境" className="d-block" width="100%"/>
                        <div className="carousel-caption">
                            <p></p>
                        </div>
                    </div>
                </div>

                <button type="button" className="carousel-control-prev" data-bs-target="#carousel" 
                data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button type="button" className="carousel-control-next" data-bs-target="#carousel" 
                data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}
