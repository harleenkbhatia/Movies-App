import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <img className = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAuIK13v3GvNfrbs4DpZrtfM2kSm3g1Q_fA&usqp=CAU" alt="logo"></img>  
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About" />                
            </div>
        )
    }
}

export default NavBar;