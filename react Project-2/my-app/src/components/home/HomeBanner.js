import React, {Component} from 'react';
import HomePage from "../../pages/HomePage";

class HomeBanner extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

export default HomeBanner;