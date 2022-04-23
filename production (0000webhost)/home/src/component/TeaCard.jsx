import React from "react";
export default class TeaCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div className="card bg-light img-fluid" style={{width: "300px"}}>
                    <img src={this.props.src} alt={this.props.teacherName} width="100%" className="card-img-top" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.teacherName}</h4>
                        <div className="card-text h5">{"畢業系所：" + this.props.graduate}</div>
                        <p className="card-text h5">{"專任科目：" + this.props.subject}</p>
                    </div>
                </div>
            </>
        );
    }
}
