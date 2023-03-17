import React, {Component} from 'react';
import HomeBanner from "../components/home/HomeBanner";

class HomePage extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div>
               <HomeBanner title="Welcome to" subtitle="Md Jahidul Islam"/>
            </div>
        );
    }
}

export default HomePage;