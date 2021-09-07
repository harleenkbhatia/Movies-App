import React from 'react';
import "./loader.css"
class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render (){
        return(
            <div className = "loader">
                <img src = "https://gifimage.net/wp-content/uploads/2018/11/transparent-loading-gif-free-4.gif" alt= "loader" height="100px" width="100px"></img>
            </div>
        )
    }

}

export default Loader;