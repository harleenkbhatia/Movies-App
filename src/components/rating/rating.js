import React from 'react';
import "./rating.css";

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let ratingStars = [
            <img src = "https://image.flaticon.com/icons/png/128/1828/1828970.png" alt = "empty-star"></img>,
            <img src = "https://image.flaticon.com/icons/png/128/1828/1828970.png" alt = "empty-star"></img>,
            <img src = "https://image.flaticon.com/icons/png/128/1828/1828970.png" alt = "empty-star"></img>,
            <img src = "https://image.flaticon.com/icons/png/128/1828/1828970.png" alt = "empty-star"></img>,
            <img src = "https://image.flaticon.com/icons/png/128/1828/1828970.png" alt = "empty-star"></img>
        ];
        for(let i = 0; i < this.props.rating; i++){
            ratingStars[i] = <img src = "https://image.flaticon.com/icons/png/128/1828/1828614.png" alt="rated-star"></img>
        }
        return (
            <div className="rating">
                {ratingStars}
            </div>
        )
    }
}

export default Rating;