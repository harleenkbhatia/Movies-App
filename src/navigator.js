import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Rating from "./components/rating/rating";
import SideBar from "./components/sideBar/sideBar";
import MoviesList from "./containers/moviesList";

class Navigator extends Component{
    render(){
        return(
            <Switch>
                <Route path = "/" exact component={MoviesList}></Route>
                <Route path = "/rating" component={Rating}></Route>
                <Route path = "/navbar" component={NavBar}></Route>
                <Route path = "/sidebar" component={SideBar}></Route>
            </Switch>
        );
    }
}

export default Navigator;