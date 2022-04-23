import React from "react";
export default class CoureseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected:"小五『XXX』特訓"}
    }
    handleChange(series) {
        this.setState({selected:series});
    }
    render() {
        const course = this.props.course;
        const seriesOrigin = course.map((item) => (item.series));
        const seriesSet = new Set(seriesOrigin);
        const seriesArray = [...seriesSet];
        return(
            <>
                <figcaption><h3>課程查詢</h3></figcaption>
                <SearchForm series={seriesArray} selectedSeries={this.state.selected}
                change={this.handleChange.bind(this)} />
                <CourseTable course={course} selectedSeries={this.state.selected} />
            </>
        );
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSelect(e){
        let series = e.target.value;
        this.props.change(series);
    }
    render() {
        const series = this.props.series;
        const seriesOptions = series.map((item) => (
            <option key={item} value={item}>{item}</option>
        ));
        return(
            <form>
                <div className="form-floating mb-2">
                    <select style={{height:80}} name="series" id="series"
                    className="form-select form-select-lg" value={this.props.selectedSeries}
                    onChange={this.handleSelect.bind(this)}>
                        {seriesOptions}
                    </select>
                    <label htmlFor="series" className="form-label">選擇課程（單選）</label>
                </div>
            </form>
        );
    }
}

function CourseTable(props) {
    const course = props.course;
    let selectedSeries = props.selectedSeries;
    const courseArray =[];
    course.forEach(element => {
        if (element.series === selectedSeries){
            courseArray.push(
            <CourseRow key={element.series + element.course}
            course={element.course} time={element.time} />);
        };
    });
    return(
        <div className="table-responsive mt-3 h4">
            <table className="table table-striped">
                <thead>
                    <tr className="border-bottom border-primary">
                        <td>班別</td>
                        <td>上課時間</td>
                    </tr>
                </thead>
                <tbody>
                    {courseArray}
                </tbody>
            </table>
        </div>
    );
}

function CourseRow({course,time}) {
    return(
        <tr>
            <td className="w-50">{course}</td>
            <td>{time}</td>
        </tr>
    );
}