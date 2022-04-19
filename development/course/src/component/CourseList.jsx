import React from "react";
import download from "../pic/downloading.png";
import fifthGrade from "../file/pdf/小五考私中特訓.pdf";
import seventhGradePre from "../file/pdf/國一先修.pdf";
import seventhGrade from "../file/pdf/國一課程.pdf";
import eighthGrade from "../file/pdf/國二課程.pdf";
import ninthGrade from "../file/pdf/國三總複習.pdf";
export default class CouresList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const course = this.props.course;
        const seriesOrigin = course.map((item) => (item.series));
        const seriesSet = new Set(seriesOrigin);
        const seriesArray = [...seriesSet];
        const courseListRowArray = seriesArray.map((item,index) => (
            <CourseListRow key={item} series={item} index={index} />
        ));
        return(
            <>
                <figcaption><h3 className="border-bottom border-2 border-primary">課表下載</h3></figcaption>
                <CourseListTable>
                    <div className="table-responsive mt-3 h4">
                        <table className="table">
                            <tbody>
                                {courseListRowArray}
                            </tbody>
                        </table>
                    </div>
                </CourseListTable>
            </>
        );
    }
}
function CourseListTable(props) {
    return props.children;
}
function CourseListRow({series,index}) {
    const courseSrcArray =[fifthGrade, seventhGradePre, seventhGrade, eighthGrade, ninthGrade];
    let src = courseSrcArray[index];
    return(
        <tr>
            <td>{series}</td>
            <td>
                <a href={src} download={series + ".pdf"} 
                title="下載課表" data-bs-toggle="tooltip" data-bs-placement="top">
                    <img src={download} alt="download" width="50" />
                </a>
            </td>
        </tr>
    );
}
//