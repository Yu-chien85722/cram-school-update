import React from "react";
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }
    handleClick() {
        this.setState((currentState) => ({visible:!currentState.visible}));
    }
    render() {
        const navbarClassName = this.state.visible? 
        "collapse navbar-collapse show" : "collapse navbar-collapse justify-content-start";
        const navItems = this.props.navItems;
        const navItemsArray = navItems.map((item) => (
            <NavItem key={item.name} href={item.href} item={item.name} active={item.active} />
        ));
        return(
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <button type="button" className="navbar-toggler" onClick={this.handleClick.bind(this)}>
                        <span className="navbar-toggler-icon"></span>Menu
                    </button>
                    <div id="collapseNav" className={navbarClassName}>
                        <ul className="navbar-nav">
                            {navItemsArray}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function NavItem(props) {
    let linkClass = "nav-link";
    if(props.active) {
        linkClass = "nav-link active"
    }
    return(
        <li className="nav-item h3">
            <a className={linkClass} href={props.href}>{props.item}</a>
        </li>
    );
}
