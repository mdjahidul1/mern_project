import React from 'react';
import HomeBanner from "../components/home/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner title="welcome" subtaitle="to jahid" jsonTitle={{name:"Jahidul",lastName:"islam",age:"24"}}/>
        </div>
    );
};

export default HomePage;