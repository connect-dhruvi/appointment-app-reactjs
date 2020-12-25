import React from 'react';
import ArticlePage from './ArticlePage';
import MapChart from './Mapchart';
function  HomePage(params) {
    return(
        <React.Fragment>
            <h1>
                Hi! I'm Dhruvi Bhatt
            </h1>
            <h3 className="about-me">
                I am passionate about travelling. Here is my first attempt to make a travel blog by coding myself and it list the destination places I wish to visit in my life.
                I keep adding different list of articles which you can check it out by clicking on the list from top menu bar.
            </h3>
            <MapChart/>
        </React.Fragment>
    )
}


export default HomePage;
